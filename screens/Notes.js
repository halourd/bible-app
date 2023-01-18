import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import NavigationBar from '../components/NavigationBar';

import styles from '../styles/SNotes';
import { ScrollView } from 'react-native-gesture-handler';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.headerContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleName}>NOTES</Text>
          </View>
        </View>

        <ScrollView>
        <TouchableOpacity 
        activeOpacity={0.6}
        onPress={() => {
          alert('Functionality not yet implemented.');
        }}
        style={styles.headerNotes}>
          <View>
            <View style={styles.notesContainer}>
              <Text style={styles.notesTitle}>Prayer Meeting</Text>
              <Text style={styles.notesDate}>12/13</Text>
            </View>
            <View style={styles.notesContainer1}>
              <View style={styles.verses}>
                <Text style={styles.noteverses}>1Cor 1:1</Text>
                <Text style={styles.noteverses}>1Cor 1:2</Text>
                <Text style={styles.noteverses}>1Cor 1:3</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
        activeOpacity={0.6}
        onPress={() => {
          alert('Functionality not yet implemented.');
        }}
        style={styles.headerNotes}>
          <View>
            <View style={styles.notesContainer}>
              <Text style={styles.notesTitle}>Thanksgiving</Text>
              <Text style={styles.notesDate}>12/13</Text>
            </View>
            <View style={styles.notesContainer1}>
              <View style={styles.verses}>
                <Text style={styles.noteverses}>1Cor 1:1</Text>
                <Text style={styles.noteverses}>1Cor 1:2</Text>
                <Text style={styles.noteverses}>1Cor 1:3</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => {
          alert('Functionality not yet implemented.');
        }}
        style={styles.headerNotes}>
          <View>
            <View style={styles.notesContainer}>
              <Text style={styles.notesTitle}>My Notes 01-15-23</Text>
              <Text style={styles.notesDate}>12/13</Text>
            </View>
            <View style={styles.notesContainer1}>
              <View style={styles.verses}>
                <Text style={styles.noteverses}>1Cor 1:1</Text>
                <Text style={styles.noteverses}>1Cor 1:2</Text>
                <Text style={styles.noteverses}>1Cor 1:3</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => {
          alert('Functionality not yet implemented.');
        }}
        style={styles.headerNotes}>
          <View>
            <View style={styles.notesContainer}>
              <Text style={styles.notesTitle}>Worship Service</Text>
              <Text style={styles.notesDate}>12/13</Text>
            </View>
            <View style={styles.notesContainer1}>
              <View style={styles.verses}>
                <Text style={styles.noteverses}>1Cor 1:1</Text>
                <Text style={styles.noteverses}>1Cor 1:2</Text>
                <Text style={styles.noteverses}>1Cor 1:3</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => {
          alert('Functionality not yet implemented.');
        }}
        style={styles.headerNotes}>
          <View>
            <View style={styles.notesContainer}>
              <Text style={styles.notesTitle}>PM 06-23-23</Text>
              <Text style={styles.notesDate}>12/13</Text>
            </View>
            <View style={styles.notesContainer1}>
              <View style={styles.verses}>
                <Text style={styles.noteverses}>1Cor 1:1</Text>
                <Text style={styles.noteverses}>1Cor 1:2</Text>
                <Text style={styles.noteverses}>1Cor 1:3</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => {
          alert('Functionality not yet implemented.');
        }}
        style={styles.headerNotes}>
          <View>
            <View style={styles.notesContainer}>
              <Text style={styles.notesTitle}>Prayer Meeting</Text>
              <Text style={styles.notesDate}>12/13</Text>
            </View>
            <View style={styles.notesContainer1}>
              <View style={styles.verses}>
                <Text style={styles.noteverses}>1Cor 1:1</Text>
                <Text style={styles.noteverses}>1Cor 1:2</Text>
                <Text style={styles.noteverses}>1Cor 1:3</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        </ScrollView>
        <NavigationBar name="Home" navigation={this.props.navigation} />
      </View>
    );
  }
}
