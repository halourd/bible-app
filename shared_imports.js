import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  TouchableHighlight,
  TouchableNativeFeedback,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Font from "expo-font";

//import All from screens
import Bible from "./screens/Bible";
import Home from "./screens/Home";
import Notes from "./screens/Notes";


//import All from components
import NavigationBar from "./components/NavigationBar";

//import All from styles
import bible_style from "../styles/SBible";
import home_style from "../styles/SHome";
import notes_style from "../styles/SNotes";

//Navigators
const Tab = createBottomTabNavigator();

const shared_imports = {
    Bible: Bible,
    Home: Home,
    Notes: Notes,
    Tab: Tab,
    NavigationContainer: NavigationContainer,
    StatusBar: StatusBar,
    Font: Font,
    Component: Component,
    StyleSheet: StyleSheet,
    Text: Text,
    View: View,
    Image: Image,
    TouchableOpacity: TouchableOpacity,
    ScrollView: ScrollView,
    Modal: Modal,
    TouchableHighlight: TouchableHighlight,
    TouchableNativeFeedback: TouchableNativeFeedback,
    createStackNavigator: createStackNavigator,
    createBottomTabNavigator: createBottomTabNavigator,
};

export default shared_imports;
