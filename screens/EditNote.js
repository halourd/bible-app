import { StatusBar } from "expo-status-bar";
import { Component } from "react";
import { View, Text, TouchableOpacity, Image} from "react-native";

import CustomHeader from "../components/CustomHeader";
import note_preview_style from '../styles/SEditNote'

export default class ManageNote extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar style="auto" />
        <CustomHeader navigation={this.props.navigation}/>
        <Text>Note Editing Page</Text>
      </View>
    );
  }
}
