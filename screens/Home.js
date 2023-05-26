import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {Text, ScrollView, View, FlatList, TouchableOpacity, Image, ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationBar from '../components/NavigationBar';
import { Dimensions } from 'react-native';
import axios from 'react-native-axios';

import Proverbs from '../chunks/Proverbs';
import Psalms from '../chunks/Psalms';

import home_style from '../styles/SHome'
import Genesis from '../chunks/Genesis';

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
    constructor(props){
        super();

        this.state = {
            votd: {
                bookname: '',
                chapter: '',
                verse: '',
            }
        }
    }

    componentDidMount(){
        this.scanBook([Proverbs, Psalms, Genesis]);
    }

    scanBook = (book) => {
        let chosen_book = book[Math.floor(Math.random() * book.length)]
        let get_rand_num = Math.floor(Math.random() * chosen_book.length)
        this.setState({ 
            votd:{
                bookname: chosen_book[get_rand_num].book_name,
                chapter: chosen_book[get_rand_num].chapter,
                verse: chosen_book[get_rand_num].text,
                verse_number: chosen_book[get_rand_num].verse
            }
        })
    }

    render(){
        return (
            <View style={style.container}>
                <ScrollView>
                <ImageBackground source={require('../assets/bg/home_bg.png')} resizeMode="cover" style={style.homeBg}>
                    <View style={style.homeNavbar}>
                            <TouchableOpacity>
                                <Image style={style.menu} source={require('../assets/pngs/burger-menu.png')}/>
                            </TouchableOpacity>
                        <Text style={style.title}>Biblecite</Text>
                    </View>
                    <View style={style.votdContainer}>
                        <Text style={[style.verse, style.use_fontFamilyRegular]}>
                            {`"${this.state.votd.verse}"`}
                        </Text>
                        <Text style={[style.verseTitle, style.use_fontFamilyRegular]}>
                            {this.state.votd.bookname} {this.state.votd.chapter}:{this.state.votd.verse_number}{"\n"}
                            <Text style={{fontSize:12, fontStyle: 'italic'}}>Ang Dating Biblia 1905</Text>
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
                        key={item => `Block#${item.id}`}
                        /> 
                    </View>
                    <View style={style.Selection}>
                        <TouchableOpacity delayPressIn={0} style={style.SelectionButtons}>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.SelectionButtons}>
                        </TouchableOpacity>  
                    </View>
                </ImageBackground>
                </ScrollView>
                <NavigationBar 
                    name="Home"
                    navigation={this.props.navigation}
                />
            </View>
        )
    }
}