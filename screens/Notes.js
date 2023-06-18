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
import * as FileSystem from "expo-file-system";

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

  refreshNoteList = async () => {
    const notes = await readNotes();
    this.setState({ noteList: notes });
  };

  handleRefresh = async () => {
    this.setState({ refreshing: true });

    this.refreshNoteList();
    setTimeout(() => {
      this.setState({ refreshing: false });
    }, 500);
  };

  showToast = (msg) => {
    ToastAndroid.showWithGravityAndOffset(
      msg,
      ToastAndroid.LONG,
      ToastAndroid.TOP,
      0,
      90
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
            <View style={styles.emptyNoteListContainer}>
              <Image style={{marginBottom: 20}} source={require("../assets/pngs/noteList.png")}/>
              <Text style={styles.emptyNoteList}>
                Notes you created will be displayed here
              </Text>
              <Text style={styles.emptyNoteList}>Click + to create a note</Text>
            </View>
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
                    key={note.fileName}
                    note_title={note.fileName}
                    note_content={note.content}
                    navigation={this.props.navigation}
                    on_click={() => {
                      deleteNotes(note.fileName)
                        .then(this.showToast(`${note.fileName} deleted`))
                        .then(this.refreshNoteList);
                    }}
                  />
                );
              })}
            </ScrollView>
          )}

          <TouchableOpacity 
          activeOpacity={0.7}
          style={styles.addNoteButtonContainer}
          onPressOut={() => {
            this.props.navigation.navigate('Manage Note', {headerTitle: "Add Note"})
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
