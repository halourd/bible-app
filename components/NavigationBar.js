import React, {Component} from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import SNavBar from '../styles/component/SNavBar'
// import SvgUri from 'react-native-svg-uri'

export default class NavigationBar extends Component {
    render(){
        return(
            <View style={[SNavBar.mainContainer, {...this.props.navBarStyle}]}>
                <TouchableOpacity style={SNavBar.buttonContainer} underlayColor="#ccc" activeOpacity={0.2}>
                    <Image style={SNavBar.iconSvg} source={require('../assets/pngs/home.png')}/>
                    <Text style={SNavBar.label}>{this.props.name}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={SNavBar.buttonContainer}>
                    <Image style={SNavBar.iconSvg} source={require('../assets/pngs/open-book.png')}/>
                    <Text style={SNavBar.label}>Bible</Text>
                </TouchableOpacity>

                <TouchableOpacity style={SNavBar.buttonContainer}>
                    <Image style={SNavBar.iconSvg} source={require('../assets/pngs/note.png')}/>
                    <Text style={SNavBar.label}>Notes</Text>
                </TouchableOpacity>
            </View>
        )
    }
}