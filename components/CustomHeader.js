import { Component } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";

import header_style from "../styles/component/SHeader";

//for NOTE CRUD
import { readNotes, createNote } from "../helper/file-system/note-fs";

export default class CustomHeader extends Component {

  createNewNote(){
    createNote(this.props.pass_note_data.title, this.props.pass_note_data.content)
    this.props.navigation.navigate(this.props.go_to_page)
  }

  render() {
    return (
      <View style={header_style.headerContainer}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate(`${this.props.go_to_page}`)
              this.props.on_back()
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


        {this.props.has_save_button === true ? 
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
        
        {this.props.has_edit_button === true ? 
          <TouchableOpacity
          disabled={this.props.isDisabled}
          activeOpacity={0.7}
          onPress={()=>{
            this.props.on_click_edit()
          }}
          style={this.props.isDisabled?header_style.saveButtonContainerDisabled:header_style.saveButtonContainer}>
            <View>
              <Text style={header_style.saveButtonText}>Edit</Text>
            </View>
          </TouchableOpacity>
        
        :null}

      </View>
    );
  }
}
