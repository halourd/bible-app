import PubNub from "pubnub";
import uuid from "react-native-uuid";
// import {PubNubProvider} from "pubnub-react";

import {readNotes, createNote} from '../file-system/note-fs'

//import request validator
import HandleNoteTransfer from '../data-handling/content-transfer';

//Store all Notes in an array


const pubnub = new PubNub({
    publishKey: "pub-c-5afbc200-ee65-45fd-88a0-f6a9a0ef3d1f",
    subscribeKey: "sub-c-d8c748dd-be1b-41d8-8e1f-89b1ec7fd6d6",
    userId: uuid.v4(),
  });

//generate code to listen for incoming copy request
export const generate_code = (() => {
    let code = '';
    for (let i = 0; i < 6; i++) {
        code += Math.floor(Math.random() * 10);
    }
    return code;
})

const processChunk = async (message) => {
    const receivedNoteChunks = [];
    let note_container = []

    receivedNoteChunks[message.index] = message.content;

    if(receivedNoteChunks.length==message.totalChunks){
        const join_chunks = receivedNoteChunks.join('')
        const note_object = JSON.parse(join_chunks)

        console.log(note_object.length)
        note_object.forEach((note, index) => {
            note_container.push(note_object[index])
        });

        // note_object.map((note) => {
        //     note_container.push(note_object)
        // });
    }

    note_container.forEach(async (note) => {
        const note_filename = note.fileName.split('-_-_-')[0].toString()
        createNote(note_filename, note.content)
    })

    console.log('===>',note_container)

}

//Listen for incoming copy request
export const listen_for_copy = (code) => {

    pubnub.addListener({
        message: (event) => {
            // console.log('[RECEIVED]',event.message);
            processChunk(event.message)

        },
    });
    pubnub.subscribe({
        channels: [code],
    });

    console.log('Listening for copy request.....')
}

/*
    ==============================================================
    - Send request
    - Use imported HandleNoteTransfer to handle note copy request
    ==============================================================
*/

export const send_request = async (code, callback) => {
    const notes = JSON.stringify(await readNotes()); //output: array of note objects

    const result = notes.match(/.{1,31000}/g) ?? []; //split data into chunks of 31000 characters

    //send each chunk of data
    result.map((chunk, index) => {
        pubnub.publish({
            channel: [code],
            message: {
                index: index,
                content: chunk,
                totalChunks: result.length,
            },
        }, (result, error)=> {
            if(error){
                console.log(error)
            }else {
                console.log(result)
            }
        });
    })

}

//remove listener
export const remove_listener = (code) => {
    pubnub.removeListener({
        message: (event) => {
            console.log(event.message);
        },
    });
    pubnub.unsubscribe({
        channels: [code],
    });
}

/*
    ==============================================================
    - Handle data transfer
    - Scan the folder where notes are located
    ==============================================================
*/






