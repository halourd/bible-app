import React, {Component} from 'react'
import { StyleSheet, Text, View } from 'react-native'
<<<<<<< HEAD
import SNavBar from '../styles/component/SNavBar'
=======

import SNavBar from '../styles/component/SNavbar'
>>>>>>> component/navigation-bar


export default class NavigationBar extends Component {
    render(){
        return(
            <View style={[SNavBar.mainContainer, {...this.props.navBarStyle}]}>
                <View style={SNavBar.buttonContainer}>
                    <View style={{borderWidth: 1, borderColor: 'green'}}>
                    {/* <SvgUri width="100%" height="100%" uri="../assets/icons/home.svg" /> */}

                    </View>
                    <Text style={SNavBar.label}>{this.props.name}</Text>
                </View>

                <View style={SNavBar.buttonContainer}>
                    <Text style={SNavBar.label}>Bible</Text>
                </View>

                <View style={SNavBar.buttonContainer}>
                    <Text style={SNavBar.label}>Notes</Text>
                </View>
            </View>
        )
    }
}