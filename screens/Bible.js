import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationBar from '../components/NavigationBar';

import bible_style from '../styles/SBible';

const style = bible_style

export default class Bible extends Component {
    render(){
        return(
            <View style={style.container}>
                <View style={style.Selection}>
                    <TouchableOpacity delayPressIn={0} style={style.SelectionButtons}>
                        <Text>1 Corinthians</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.SelectionButtons}>
                        <Text>Chapter 1</Text>
                    </TouchableOpacity>
                </View>


                    <NavigationBar 
                        name="Home"
                    />

            </View>
        )
    }
}