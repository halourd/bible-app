import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { View, KeyboardAvoidingView, Text, TouchableOpacity, Image, TextInput} from "react-native";

import CustomHeader from "../components/CustomHeader";
import styles from '../styles/SManageNote'

export default class ManageNote extends Component {
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
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <StatusBar style="auto" />
        <CustomHeader navigation={this.props.navigation} isDisabled={this.state.save_button_disabled} has_save_button={true} header_title={this.props.route.params.headerTitle}/>

        <View>  
          <View style={styles.titleEditorContainer}>
            <TextInput
            ref={this.firstTextInputRef}
            clearButtonMode="while-editing"
            returnKeyType="next"
            placeholder="Title"
            cursorColor={'#203239'}
            style={styles.titleEditor}
            onChangeText={(title)=> {
              this.setState({noteTitle: title}, ()=>{
                this.state.noteTitle.length > 0 ?
                  this.setState({save_button_disabled: false})
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
              scrollEnabled={true}
              textAlignVertical="top"
              multiline={true}
              cursorColor={'#203239'}
              style={styles.noteEditingField}
              />
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
