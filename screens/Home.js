import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, Animated, View, FlatList, FlatListProps, SafeAreaView, TouchableOpacity, Image, ImageBackground, ImagePickerIOS } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationBar from '../components/NavigationBar';
import { Dimensions } from 'react-native';
import { MenuContext, Menu, MenuOptions, MenuOption, MenuTrigger, MenuProvider, renderers, rendererProps } from 'react-native-popup-menu';



import home_style from '../styles/SHome'

const style = home_style
const Stack = createStackNavigator();

const data = [
    {
        'id': '1',
        'title': 'MCGI Bible Study',
        'image': require('../assets/vids/biblestudy.png')
    },
    {
        'id': '2',
        'title': 'MCGI Mass Indoctrination',
        'image': require('../assets/vids/massindoc.png')
    },
    {
        'id': '3',
        'title': 'MCGI Cares',
        'image': require('../assets/vids/mcgicares.png')
    },
];

const Item = ({title, image, id}) => [
    <TouchableOpacity activeOpacity={0.7}>
        <View style={style.videos}>
            <View>
                <Image source={image} style={style.thumbnail}/>
            </View>
            <Text style={{fontFamily: 'ProductSans-Bold', marginBottom: 10}}>{title}</Text>
        </View>
    </TouchableOpacity>
];

export default class Home extends Component{
    render(){
        return (
            <View style={style.container}>
                <ImageBackground source={require('../assets/bg/home_bg.png')} resizeMode="cover" style={style.homeBg}>
                <View style={style.homeNavbar}>
                        <MenuProvider>
                            <View>
                            <Menu>
                                <MenuTrigger>
                                    <Image source={require('../assets/pngs/burger-menu.png')} style={style.menu}/>
                                </MenuTrigger>
                                <MenuOptions>
                                    <MenuOption onSelect={() => alert(`Functionality not yet implemented.`)} text="Function"/>
                                </MenuOptions>
                            </Menu>
                            </View>
                        </MenuProvider>
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
                    data={data}
                    renderItem={({item}) => <Item title={item.title} image={item.image}/>}
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