import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import NavigationBar from '../components/NavigationBar';

import NoteBlock from '../components/notes/NoteBlock';
import styles from '../styles/SNotes';
import { ScrollView } from 'react-native-gesture-handler';
import * as FileSystem from 'expo-file-system'

export default class Notes extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.headerContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleName}>NOTES</Text>
          </View>
          <TouchableOpacity
            style={styles.optionContainer}
            onPress={() => {
              this.props.navigation.navigate('Sync')
            }}
          >
            <Image source={require('../assets/pngs/cloud_sync.png')} style={styles.optionImage} />
            <Text style={styles.optionTitle}>Sync Notes</Text>
          </TouchableOpacity>
        </View>

        <ScrollView>
        <NoteBlock 
        navigation={this.props.navigation}
        />

        </ScrollView>
        <NavigationBar name="Home" navigation={this.props.navigation} />
      </View>
    );
  }
}
