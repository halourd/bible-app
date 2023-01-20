import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, Animated, View, FlatList, FlatListProps, SafeAreaView, TouchableOpacity, Image, ImageBackground, ImagePickerIOS } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationBar from '../components/NavigationBar';
import { Dimensions } from 'react-native';



import home_style from '../styles/SHome'

const style = home_style
const Stack = createStackNavigator();

const DATA = [
    {
        id: '1',
        title: 'Community Prayer',
        image: require('../assets/vids/community_prayer.png')
    },
    {
        id: '2',
        title: 'Mass Indoctrination',
        image: require('../assets/vids/mass_indoc.png')
    },
    {
        id: '3',
        title: 'Songs of Faith',
        image: require('../assets/vids/songs_of_faith.png')
        
    },
];

const Item = ({title, image}) => [
    <View style={style.videos}>
        <Image source={{uri: image}}/>
        <Text>{title}</Text>
    </View>
];


export default class Home extends Component{
    render(){
        return (
            <View style={style.container}>
                <ImageBackground source={require('../assets/bg/home_bg.png')} resizeMode="cover" style={style.homeBg}>
                <View style={style.homeNavbar}>
                        <TouchableOpacity>
                            <Image style={style.menu} source={require('../assets/pngs/burger-menu.png')}/>
                        </TouchableOpacity>
                    <Text style={style.title}>Biblecite</Text>
                </View>
                <View style={style.votdContainer}>
                    <Text style={[style.verse, style.use_fontFamilyRegular]}>
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
                <View style={style.videosContainer}>
                    <Text style={style.vidHeader}>Videos</Text>
                    <FlatList 
                    data={DATA}
                    renderItem={({item}) => <Item title={item.title} /> }
                    horizontal 
                    contentContainerStyle={{padding: 5}}
                    contentInsetAdjustmentBehavior='never'
                    snapToAlignment='center'
                    decelerationRate='fast'
                    automaticallyAdjustContentInsets={false}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    scrollEventThrottle ={1}
                    snapToInterval={300}
                    contentOffset={{50:50}}
                    /> 
                </View>
                <View style={style.Selection}>
                    <TouchableOpacity delayPressIn={0} style={style.SelectionButtons}>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.SelectionButtons}>
                    </TouchableOpacity>  
                </View>
                <NavigationBar 
                    name="Home"
                    navigation={this.props.navigation}
                />
                </ImageBackground>
            </View>
        )
    }
}