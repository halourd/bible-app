import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationBar from '../components/NavigationBar';

import bible_style from '../styles/SBible';
import { FlatList } from 'react-native-gesture-handler';

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
                
                <ScrollView>
                    <View style={style.VerseViewContainer}>
                        <View style={style.verseNumber}>
                            <Text>1</Text>
                        </View>
                        <View style={style.verseText}>
                            <Text>
                                Si Pablo, na tinawag na maging apostol ni Jesucristo sa pamamagitan ng kalooban ng Dios, at si Sostenes na ating kapatid, 
                            </Text>
                        </View>
                    </View>

                </ScrollView>


                <NavigationBar 
                    name="Home"
                />
            </View>
        )
    }
}