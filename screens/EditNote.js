import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { View, KeyboardAvoidingView, Text, TouchableOpacity, Keyboard, Image, TextInput} from "react-native";

import CustomHeader from "../components/CustomHeader";
import styles from '../styles/SEditNote'

import { readNotes, createNote } from "../helper/file-system/note-fs";

export default class EditNote extends Component {
  constructor(props){
    super(props);

    this.firstTextInputRef = React.createRef();
    this.secondTextInputRef = React.createRef();

    this.state = {
      noteTitle:"",
      noteContent: "",
      edit_button_disabled: true,
      isEditable: false
    }
  }

  clearFieldsOnSave(){
    if(this.props.route.params.resetFields == true){
      this.setState({noteTitle: '', noteContent: ''})
    }
  }

  render() {

    const {noteContent, noteTitle} = this.props.route.params;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <StatusBar style="auto" />
        <CustomHeader 
        go_to_page='Notes'
        navigation={this.props.navigation} 
        isDisabled={this.state.save_button_disabled} 
        has_edit_button={true} 
        on_back={()=> {
            this.setState({noteTitle: '', noteContent: ''})
        }}
        // header_title={this.props.route.params.headerTitle}
        // pass_note_data={{title: this.state.noteTitle, content: this.state.noteContent}}
        on_click_edit={()=> {
            this.setState({isEditable: true})
        }}
        />
        <View>  
          <View style={styles.titleEditorContainer}>
            <TextInput
            editable={this.state.isEditable}
            ref={this.firstTextInputRef}
            clearButtonMode="while-editing"
            returnKeyType="next"
            value={noteTitle}
            placeholder="Title"
            cursorColor={'#203239'}
            style={styles.titleEditor}
            onChangeText={(title)=> {
              this.setState({noteTitle: title}, ()=>{
                this.state.noteTitle.length > 0 ?
                  this.setState({edit_button_disabled: false})
                  :
                  this.setState({edit_button_disabled: true})
              })
            }}
            onSubmitEditing={()=> {
              if(this.secondTextInputRef.current){
                this.secondTextInputRef.current.focus()
              }
            }}
            />
          </View>

          <View style={styles.noteEditingFieldContainer}>
            <TextInput
              ref={this.secondTextInputRef}
              value={noteContent}
              editable={this.state.isEditable}
              scrollEnabled={true}
              textAlignVertical="top"
              multiline={true}
              cursorColor={'#203239'}
              onChangeText={(content)=> {
                this.setState({noteContent: content})
              }}
              style={styles.noteEditingField}
              />
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
