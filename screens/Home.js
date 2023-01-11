import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground, ImagePickerIOS } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationBar from '../components/NavigationBar';

import home_style from '../styles/SHome'

// import Carousel from 'react-native-snap-carousel';

const style = home_style

export default class Home extends Component{

    // _renderItem = ({item, index}) => {
    //     return (
    //         <View style={style.videosContainer}>
    //                 <Text style={StyleSheet.content}>{item.title}</Text>
    //         </View>
    //     )
    // }

    render(){
        return (
            <View style={style.container}>
                {/* <ImageBackground source={require('../assets/bg/home_bg.png')} resizeMode="cover" style={style.homeBg}> */}
                <View style={style.homeNavbar}>
                    <TouchableOpacity>
                        <Image style={style.menu} source={require('../assets/pngs/burger-menu.png')}/>
                    </TouchableOpacity>
                    <Text style={style.title}>Biblecite</Text>
                </View>
                <View style={style.votdContainer}>
                    <Text style={style.verse}>
                        "But grow in grace, and in the
                        knowledge of our Lord and
                        Savior Jesus Christ. To him be 
                        glory both now and forever.
                        Amen."
                    </Text>
                    <Text style={style.verseTitle}>
                        2 Peter 3:18{"\n"}
                        King James version
                    </Text>
                </View>
                {/* <Carousel
                ref={(c) => { this._carousel = c; }}
                data={this.state.entries}
                renderItem={this._renderItem}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
                /> */}
                <View style={style.Selection}>
                    <TouchableOpacity delayPressIn={0} style={style.SelectionButtons}>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.SelectionButtons}>
                    </TouchableOpacity> 
                </View>
                {/* <NavigationBar 
                    name="Home"
                /> */}
                {/* </ImageBackground> */}
            </View>
        )
    }
}

