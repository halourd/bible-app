import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';

import Bible from './screens/Bible'
import Home from './screens/Home'
const Stack = createStackNavigator();


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontsLoaded: false,
    }
  }

  async loadFonts() {
    await Font.loadAsync({
      'ProductSans-Bold': require('./assets/fonts/ProductSans-Bold.ttf'),
      'ProductSans-Italic': require('./assets/fonts/ProductSans-Italic.ttf'),
      'ProductSans-Regular': require('./assets/fonts/ProductSans-Regular.ttf'),
    });
    
    console.log('Triggered.')
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    console.log('Fonts Not loaded');

    this.loadFonts().then(() => {
      console.log('Fonts loaded');
    });

  }
  
  
  render(){
    if(!this.state.fontsLoaded) {
      return null;
    }
  return (
    <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator>
          <Stack.Screen 
            name="Bible"
            component={Bible}
          />  
          {/* <Stack.Screen 
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />       */}
        </Stack.Navigator>
    </NavigationContainer>
  );
}
}

