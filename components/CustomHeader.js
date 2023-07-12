import { Component } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import {getStorage, setStorage} from '../helper/storage/async-storage'
import header_style from "../styles/component/SHeader";

//for NOTE CRUD
import { readNotes, createNote, updateThisNote } from "../helper/file-system/note-fs";

export default class CustomHeader extends Component {

  createNewNote(){
    createNote(this.props.pass_note_data.title, this.props.pass_note_data.content)
    this.props.navigation.navigate(this.props.go_to_page, {has_new_note: true})
  }
  
  updateThisNote(){
    updateThisNote(this.props.pass_note_data.old_note_filename, this.props.pass_note_data.title, this.props.pass_note_data.content)
    .then(async (new_path)=>{
      await setStorage('newfilename_for_updated_note', new_path)
    })
  }

  render() {
    return (
      <View style={[header_style.headerContainer, {...this.props.custom_style}]}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => {
              this.props.on_back?this.props.on_back():null
              this.props.navigation.navigate(`${this.props.go_to_page}`, {has_new_note: true})
            }}
          >
            <View style={header_style.backButtonContainer}>
              <Image
                source={require("../assets/pngs/arrow_left.png")}
                style={header_style.backButtonImage}
              />
            </View>
          </TouchableOpacity>

          <View style={header_style.titleContainer}>
            <Text style={header_style.titleName}>{this.props.header_title}</Text>
          </View>
        </View>

        <View style={header_style.actionButtonContainer}>
          
          {this.props.has_save_button === true &&
          this.props.action_for_save_button=="note-update"
          ? 
            <TouchableOpacity
            disabled={this.props.isDisabled}
            activeOpacity={0.7}
            onPress={()=> {
              this.updateThisNote();
              this.props.on_save();
            }}

            style={this.props.isDisabled?header_style.saveButtonContainerDisabled:header_style.saveButtonContainer}>
              <View>
                <Text style={header_style.saveButtonText}>Save</Text>
              </View>
            </TouchableOpacity>
          
          :null}

          {this.props.has_save_button === true &&
          this.props.action_for_save_button=="note-create"
          ? 
            <TouchableOpacity
            disabled={this.props.isDisabled}
            activeOpacity={0.7}
            onPress={()=> {
              this.createNewNote();
              this.props.on_save();
            }}

            style={this.props.isDisabled?header_style.saveButtonContainerDisabled:header_style.saveButtonContainer}>
              <View>
                <Text style={header_style.saveButtonText}>Save</Text>
              </View>
            </TouchableOpacity>
          
          :null}
          
          {this.props.has_edit_button === true?
            <TouchableOpacity
            disabled={this.props.isDisabled}
            activeOpacity={0.7}
            onPress={()=>{
              this.props.on_click_edit()
            }}
            style={this.props.edit_button_clicked?header_style.saveButtonContainerDisabled:header_style.saveButtonContainer}>
              <View>
                <Text style={header_style.saveButtonText}>{this.props.edit_button_clicked?"Cancel":"Edit"}</Text>
              </View>
            </TouchableOpacity>
          
          :null}
        </View>

      </View>
    );
  }
}
