import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ToastAndroid,
  Image,
  RefreshControl,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import NavigationBar from "../components/NavigationBar";

import NoteBlock from "../components/notes/NoteBlock";
import styles from "../styles/SNotes";
import { ScrollView } from "react-native-gesture-handler";
import uuid from 'react-native-uuid'

import {
  readNotes,
  createNote,
  deleteNotes,
} from "../helper/file-system/note-fs";

export default class Notes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      noteList: [],
      refreshing: false,
      isEmptyList: false,
    };
  }


  async componentDidMount() {
    this.refreshNoteList();
  }

  componentDidUpdate(prevProps){
    if(prevProps.route.params !== this.props.route.params){
      this.refreshNoteList();
    }
  }

  componentWillUnmount(){
    this.interval = clearInterval()
  }

  refreshNoteList = async () => {
    const notes = await readNotes();

    const sortedNotes = notes.sort((a, b)=> {
      const dateA = new Date(a.creationDate);
      const dateB = new Date(b.creationDate);
      return dateB - dateA;
    })
    this.setState({ noteList: sortedNotes });

  };

  handleRefresh = async () => {
    this.setState({ refreshing: true });

    this.refreshNoteList();
    setTimeout(() => {
      this.setState({ refreshing: false });
    }, 500);
  };

  showToast = (msg) => {
    ToastAndroid.show(
      msg,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.headerContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleName}>NOTES</Text>
          </View>

          <TouchableOpacity
            style={styles.optionContainer}
            onPress={() => {
              this.props.navigation.navigate("Sync");
            }}>
            <Image
              source={require("../assets/pngs/cloud_sync.png")}
              style={styles.optionImage}
            />
          </TouchableOpacity>
        </View>

          {/* show this message if list is empty */}
          {this.state.noteList.length === 0 ? (
            <ScrollView 
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this.handleRefresh}
              />
            }
            contentContainerStyle={styles.emptyNoteListContainer}>
              <Image style={{marginBottom: 20}} source={require("../assets/pngs/noteList.png")}/>
              <Text style={styles.emptyNoteList}>
                Notes you created will be displayed here
              </Text>
              <Text style={styles.emptyNoteList}>Click + to create a note</Text>
              <Text style={styles.emptyNoteList}></Text>
              <Text style={styles.emptyNoteList}>Press and Hold Note to delete</Text>
            </ScrollView>
          ) : (
            <ScrollView
              contentContainerStyle={styles.containerStyle}
              refreshControl={
                <RefreshControl
                  refreshing={this.state.refreshing}
                  onRefresh={this.handleRefresh}
                />
              }
            >
              {this.state.noteList.map((note) => {
                return (
                  <NoteBlock
                    key={`${note.fileName}_${uuid.v4()}`}
                    note_title={note.fileName.split('-_-_-')[0].toString()}
                    note_content={note.content}
                    note_modified_date={note.fileFormattedDate}
                    navigation={this.props.navigation}
                    on_long_press={()=> {
                      deleteNotes(note.fileName)
                        .then(this.showToast(`"${note.fileName.split('-_-_-')[0].toString()}" deleted`))
                        .then(this.refreshNoteList);
                    }}
                    on_click={() => {
                      this.props.navigation.navigate('Edit Note', {
                        noteContent: note.content,
                        noteTitle: note.fileName.split('-_-_-')[0].toString(),
                        note_filename: note.fileName

                      })

                    }
                    
                  }
                  />
                );
              })}
            </ScrollView>
          )}

          <TouchableOpacity 
          activeOpacity={0.7}
          style={styles.addNoteButtonContainer}
          onPressOut={() => {
            this.props.navigation.navigate('Add Note', {headerTitle: "Add Note", titleField: '', contentField: ''})
          }}
          >
            <View style={{paddingHorizontal: 10}}>
              <Text style={styles.addNoteButtonText}>+</Text>
            </View>
          </TouchableOpacity>

        <NavigationBar name="Home" navigation={this.props.navigation} />
      </View>
    );
  }
}
