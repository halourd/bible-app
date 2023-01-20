import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import NavigationBar from "../components/NavigationBar";
import sync_style from "../styles/SSync";

export default class Sync extends Component {
  render() {
    return (
      <View>
        {/* Sync from other device */}
        <View style={sync_style.container1}>
          <View style={sync_style.subContainer1}>
            <Image source={require("../assets/pngs/home.png")} />
          </View>

          <View style={sync_style.subContainer2}>
            <Text style={sync_style.syncLabel}>Sync from other Device</Text>
            <TextInput
              style={sync_style.codeInputBox}
              placeholder="Enter shared code here"
            />
            <TouchableOpacity style={sync_style.syncButton}>
              <View style={sync_style.buttonImgContainer}>
                <Image
                  source={require("../assets/pngs/home.png")}
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
        <View style={sync_style.container2}>
          <View style={sync_style.container1}>
            <View style={sync_style.subContainer1}>
              <Image source={require("../assets/pngs/home.png")} />
            </View>

            <View style={sync_style.subContainer2}>
              <Text style={sync_style.syncLabel}>
                Share your notes to others
              </Text>
              <TextInput
                style={sync_style.codeInputBox2}
                placeholder="675444"
              />
              <TouchableOpacity style={sync_style.syncButton}>
                <View style={sync_style.buttonImgContainer}>
                  <Image
                    source={require("../assets/pngs/home.png")}
                    style={sync_style.buttonImg}
                  />
                </View>
                <View style={sync_style.buttonTextContainer}>
                  <Text style={sync_style.buttonText}>Start syncing</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <NavigationBar name="Home" navigation={this.props.navigation} />
        
      </View>
    );
  }
}