import "react-native-gesture-handler";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import sync_style from "../styles/SSync";

export default class Sync extends Component {
  render() {
    return (
      <View style={sync_style.mainContainer}>
        {/* Header Title */}
        <View style={sync_style.headerContainer}>
          
          <TouchableOpacity
            onPress={() => { 
              this.props.navigation.goBack('Notes')
            }}
          >
          <View style={sync_style.backButtonContainer}>
            <Image source={require('../assets/pngs/arrow_left.png')} style={sync_style.backButtonImage} />
            </View>
            </TouchableOpacity>

          <View style={sync_style.titleContainer}>
            <Text style={sync_style.titleName}>Sync</Text>
          </View>
        </View>
        {/* Sync from other device */}
        <View style={sync_style.container1}>
          <View style={sync_style.subContainer1}>
            <Image source={require("../assets/pngs/sync_block1.png")} style={sync_style.subContainer2Image} />
          </View>

          <View style={sync_style.subContainer2}>
            <Text style={sync_style.syncLabel}>Sync from other Device</Text>
            <TextInput
              maxLength={6}
              keyboardType="Numeric"
              cursorColor={'#203239'}
              style={sync_style.codeInputBox}
              placeholder="Enter shared code here"
            />
            <TouchableOpacity activeOpacity={0.6} style={sync_style.syncButton}>
              <View style={sync_style.buttonImgContainer}>
                <Image
                  source={require("../assets/pngs/sync.png")}
                  style={sync_style.buttonImg}
                />
              </View>
              <View style={sync_style.buttonTextContainer}>
                <Text style={sync_style.buttonText}>Start syncing</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Share your notes to others */}
          <View style={sync_style.container1}>
            <View style={sync_style.subContainer1}>
              <Image source={require("../assets/pngs/sync_block2.png")} style={ sync_style.subContainer1Image} />
            </View>

            <View style={sync_style.subContainer2}>
              <Text style={sync_style.syncLabel}>
                Share your notes to others
            </Text>
            
            <View style={sync_style.codeInputBox2}>
              <Text style={sync_style.codeText}>902022</Text>
            </View>
            
              <TouchableOpacity activeOpacity={0.6} style={sync_style.syncButton}>
                <View style={sync_style.buttonImgContainer}>
                  <Image
                    source={require("../assets/pngs/copy.png")}
                    style={sync_style.buttonImg}
                  />
                </View>
                <View style={sync_style.buttonTextContainer}>
                  <Text style={sync_style.buttonText}>Copy shared code</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        {/* <NavigationBar name="Home" navigation={this.props.navigation} /> */}
        
      </View>
    );
  }
}