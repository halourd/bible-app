import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { View, KeyboardAvoidingView, ScrollView, ToastAndroid, Text, TouchableOpacity, Keyboard, Image, TextInput, TouchableNativeFeedbackBase} from "react-native";

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

  componentDidMount(){
    const { noteContent, noteTitle } = this.props.route.params;
    this.setState({ noteContent, noteTitle, isEditable: true });
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps)
    const { noteContent, noteTitle } = this.props.route.params;
    if (prevProps.route.params.noteContent !== noteContent || prevProps.route.params.noteTitle !== noteTitle) {
      this.setState({ noteContent, noteTitle });
    }
  }

  showToast = (msg) => {
    ToastAndroid.showWithGravityAndOffset(
      msg,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      0,
      100
    );
  };

  toogleEditButton(){
    this.setState((prevState) => ({
      isEditable: !prevState.isEditable
    }));

    !this.state.isEditable==false?
    this.showToast("You're now editing this note"):
    this.showToast("Previewing")
  }

  render() {

    const {noteContent, noteTitle} = this.props.route.params;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <StatusBar style="auto" />
        <CustomHeader 
        go_to_page='Notes'
        action_for_save_button="note-update"
        navigation={this.props.navigation} 
        isDisabled={this.state.save_button_disabled} 
        has_edit_button={true} 
        on_back={()=> {
            // this.setState({noteTitle: '', noteContent: ''})
            this.setState({isEditable: true})
          }}
        on_hardware_back={()=> {
          this.setState({isEditable: false})
        }}
        pass_note_data={{title: this.state.noteTitle, content: this.state.noteContent}}
        on_click_edit={()=> {
          this.toogleEditButton()
            // this.setState({isEditable: true})
        }}
        has_save_button={!this.state.isEditable}
        on_save={()=>{

        }}
        />
        <View>  
          <View 
          style={[
            styles.titleEditorContainer,
            this.state.isEditable?
            null:{backgroundColor: '#e8e8e8'}
          ]}
          >
            <TextInput
            editable={!this.state.isEditable}
            ref={this.firstTextInputRef}
            clearButtonMode="while-editing"
            returnKeyType="next"
            value={this.state.noteTitle}
            placeholder="Title"
            cursorColor={'#325FA9'}
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

          <ScrollView style={styles.noteEditingFieldContainer}>
            <TextInput
              ref={this.secondTextInputRef}
              value={this.state.noteContent}
              editable={!this.state.isEditable}
              aria-disabled={true}
              scrollEnabled={true}
              textAlignVertical="top"
              multiline={true}
              numberOfLines={25}
              cursorColor={'#325FA9'}
              onChangeText={(content)=> {
                this.setState({noteContent: content})
              }}
              style={styles.noteEditingField}
              />
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
