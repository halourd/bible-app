import { Component } from "react";
import {Text, View, TouchableOpacity, Image} from 'react-native'

import header_style from '../styles/component/SHeader'

export default class CustomHeader extends Component {
    render(){
        return(
            <View style={header_style.headerContainer}>
          
            <TouchableOpacity
              onPress={() => { 
                this.props.navigation.navigate('Notes')
              }}
            >
            <View style={header_style.backButtonContainer}>
              <Image source={require('../assets/pngs/arrow_left.png')} style={header_style.backButtonImage} />
              </View>
              </TouchableOpacity>
  
            <View style={header_style.titleContainer}>
              <Text style={header_style.titleName}>Edit Note</Text>
            </View>
          </View>
        )
    }
}