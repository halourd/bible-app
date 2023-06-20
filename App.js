import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as Font from 'expo-font';

import Bible from './screens/Bible'
import Home from './screens/Home'
import Notes from './screens/Notes'
import Search from './screens/Search'
import Sync from './screens/Sync';
import AddNote from './screens/AddNote';
// import EditNote from './screens/EditNote';

// import navigation from './config/navigation'
const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();


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
    
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
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
        <Tab.Navigator initialRouteName='Home'>
          <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{
            headerShown: false,
            tabBarStyle: { display: "none" },
          }}
          />
          <Tab.Screen 
          name="Bible" 
          component={Bible}
          options={{
            headerShown: false,
            tabBarStyle: { display: "none" },
          }} 
          />
          <Tab.Screen 
          name="Notes" 
          component={Notes}
          options={{
            headerShown: false,
            tabBarStyle: { display: "none" },
          }} 
          />
          <Tab.Screen 
          name="Search" 
          component={Search}
          options={{
            headerShown: false,
            tabBarStyle: { display: "none" },
          }} 
          
          />
          <Tab.Screen 
          name="Sync" 
          component={Sync}
          options={{
            headerShown: false,
            tabBarStyle: { display: "none" },
          }} /> 

          <Tab.Screen 
          name="Add Note" 
          component={AddNote}
          options={{
            headerShown: false,
            tabBarStyle: { display: "none" },
          }} /> 


        </Tab.Navigator>


        {/* <Stack.Navigator initialRouteName='Home'>

          <Stack.Screen 
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />      

          <Stack.Screen 
            name="Bible"
            component={Bible}
          />  
        </Stack.Navigator> */}
    </NavigationContainer>
  );
}
}

