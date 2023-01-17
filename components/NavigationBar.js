import React, {Component} from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableNativeFeedback } from 'react-native'
import SNavBar from '../styles/component/SNavBar'

import Bible from '../screens/Bible';
// import SvgUri from 'react-native-svg-uri'

export default class NavigationBar extends Component {
    render(){
        return(
            <View style={[SNavBar.mainContainer, {...this.props.navBarStyle}]}>
                <TouchableNativeFeedback 
                useForeground={true} 
                onPress={()=>{
                    this.props.navigation.navigate('Home')
                }}
                background={TouchableNativeFeedback.SelectableBackground()
                }>
                    <View style={SNavBar.buttonContainer}>
                        <Image style={SNavBar.iconSvg} source={require('../assets/pngs/home.png')}/>
                        <Text style={[SNavBar.label, SNavBar.use_fontFamily]}>{this.props.name}</Text>
                    </View>

                </TouchableNativeFeedback> 

                <TouchableNativeFeedback 
                 onPress={()=>{
                    this.props.navigation.navigate('Bible')
                 }}
                useForeground={true}>
                    <View style={SNavBar.buttonContainer}>
                        <Image style={SNavBar.iconSvg} source={require('../assets/pngs/open-book.png')}/>
                        <Text style={[SNavBar.label, SNavBar.use_fontFamily]}>Bible</Text>
                    </View>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback useForeground={true}>
                    <View style={SNavBar.buttonContainer}>
                        <Image style={SNavBar.iconSvg} source={require('../assets/pngs/note.png')}/>
                        <Text style={[SNavBar.label, SNavBar.use_fontFamily]}>Notes</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }
}