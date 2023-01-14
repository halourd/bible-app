import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Bible from './screens/Bible'
const Stack = createStackNavigator();

export default class App extends Component {
  render(){
  return (
    <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator>
          <Stack.Screen 
            name="Bible"
            component={Bible}
            
          />        
        </Stack.Navigator>
    </NavigationContainer>
  );
}
}

