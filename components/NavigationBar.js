import React, {Component} from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import SNavBar from '../styles/component/SNavBar'
// import SvgUri from 'react-native-svg-uri'

export default class NavigationBar extends Component {
    render(){
        return(
            <View style={[SNavBar.mainContainer, {...this.props.navBarStyle}]}>
                <View style={SNavBar.buttonContainer}>
                    <View>
                        <Image style={SNavBar.iconSvg} source={require('../assets/favicon.png')}/>
                    </View>
                    <Text style={SNavBar.label}>{this.props.name}</Text>
                </View>

                <View style={SNavBar.buttonContainer}>
                    <Image style={SNavBar.iconSvg} source={require('../assets/favicon.png')}/>
                    <Text style={SNavBar.label}>Bible</Text>
                </View>

                <View style={SNavBar.buttonContainer}>
                    <Image style={SNavBar.iconSvg} source={require('../assets/favicon.png')}/>
                    <Text style={SNavBar.label}>Notes</Text>
                </View>
            </View>
        )
    }
}