import PubNub from "pubnub";
import uuid from "react-native-uuid";
// import {PubNubProvider} from "pubnub-react";

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


//Listen for incoming copy request
export const listen_for_copy = (code) => {
    pubnub.addListener({
        message: (event) => {
            alert(`[RECEIVED] ${event.message.text}`)
            // console.log('[RECEIVED]',event.message);
        },
    });
    pubnub.subscribe({
        channels: [code],
    });
    console.log('Listening for copy request.....')
}

//Send copy request
export const send_request = (code) => {
    pubnub.publish({
        channel: [code],
        message: {
            text: 'This is your request. Thank you for using our app!',
        },
    });

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


