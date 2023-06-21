import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { View, KeyboardAvoidingView, Text, TouchableOpacity, Keyboard, Image, TextInput} from "react-native";

import CustomHeader from "../components/CustomHeader";
import styles from '../styles/SEditNote'

import { readNotes, createNote } from "../helper/file-system/note-fs";

export default class AddNote extends Component {
  constructor(props){
    super(props);

    this.firstTextInputRef = React.createRef();
    this.secondTextInputRef = React.createRef();

    this.state = {
      noteTitle:"",
      noteContent: "",
      save_button_disabled: true
    }
  }


  componentDidMount(){
    this.firstTextInputRef.current?
    [this.firstTextInputRef.current.focus(), Keyboard.isVisible(true)]:
    this.firstTextInputRef.current.focus()
  }

  clearFieldsOnSave(){
    if(this.props.route.params.resetFields == true){
      this.setState({noteTitle: '', noteContent: ''})
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <StatusBar style="auto" />
        <CustomHeader 
        go_to_page='Notes'
        action_for_save_button="note-create"
        navigation={this.props.navigation} 
        isDisabled={this.state.save_button_disabled} 
        has_save_button={true} 
        header_title={this.props.route.params.headerTitle}
        pass_note_data={{title: this.state.noteTitle, content: this.state.noteContent}}
        on_save={()=> {
          this.setState({noteContent: '', noteTitle: '', save_button_disabled: true})
        }}
        on_back={()=> {
          this.setState({noteTitle: '', noteContent: ''})
      }}
        />
        <View>  
          <View style={styles.titleEditorContainer}>
            {console.log(this.state.noteTitle)}
            <TextInput
            ref={this.firstTextInputRef}
            clearButtonMode="while-editing"
            returnKeyType="next"
            value={this.state.noteTitle}
            placeholder="Title"
            cursorColor={'#203239'}
            style={styles.titleEditor}
            onChangeText={(title)=> {
              this.setState({noteTitle: title}, ()=>{
                this.state.noteTitle.length >= 0 ?
                  this.setState({save_button_disabled: false}, ()=> {

                  })
                  :
                  this.setState({save_button_disabled: true})
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
              value={this.state.noteContent}
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
