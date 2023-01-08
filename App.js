import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Text>
      Hello!
    </Text>
    // <NavigationContainer>
    //     <StatusBar style="auto" />
    //     <Stack.Navigator>
    //       <Stack.Screen 
    //         name="Home"
    //         component={""}
    //         options={{}}
    //       />
    //       <Stack.Screen 
    //         name="Bible"
    //         component={""}
    //         options={{}}
    //       />          
    //     </Stack.Navigator>
    // </NavigationContainer>
  );
}

