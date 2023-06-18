import { Component } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";

import header_style from "../styles/component/SHeader";

export default class CustomHeader extends Component {
  render() {
    return (
      <View style={header_style.headerContainer}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Notes");
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
          style={this.props.isDisabled?header_style.saveButtonContainerDisabled:header_style.saveButtonContainer}>
            <View>
              <Text style={header_style.saveButtonText}>Save</Text>
            </View>
          </TouchableOpacity>
        
        :null}

      </View>
    );
  }
}
