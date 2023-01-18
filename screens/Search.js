import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { SafeAreaView, Pressable, KeyboardAvoidingView, Keyboard, Text, View, TouchableOpacity, Image, ImageBackground, ImagePickerIOS } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import search_style from '../styles/SSearch';
import { TextInput } from 'react-native-gesture-handler';


export default class Search extends Component{
    constructor(props){
        super(props)

        this.state = {
            isSearchModalVisible: false,
            isLanguageModalVisible: false,
            selectedSearch: 'Entire Bible',
            selectedLanguage: 'Tagalog',
            inputQuery: '',
        }
    }
    render(){
        return(
            <KeyboardAvoidingView style={[search_style.container]}>
                <Pressable onPress={()=> {Keyboard.dismiss()}}>
                    <View style={search_style.searchHeaderContainer}>
                        <TouchableOpacity 
                        activeOpacity={0.4} 
                        style={search_style.searchHeader}
                        onPress={() => this.props.navigation.navigate('Bible')}
                        >
                            <Image source={require('../assets/pngs/arrow_left.png')} style={search_style.searchIcon}/>
                        </TouchableOpacity>
                        <Text style={[search_style.searchHeaderText, search_style.use_fontFamilyBold]}>Search</Text>
                    </View>

                    <View style={search_style.searchBodyContainer}>
                        <View style={search_style.searchBody}>
                            <View style={search_style.selectionContainer}>
                                <View style={search_style.searchSelection}>
                                    <Text style={[search_style.searchSelectionHeaderTitle, search_style.use_fontFamilyRegular]}>Search at:</Text>
                                    <TouchableOpacity 
                                    activeOpacity={0.4} 
                                    onPress={() => {
                                        alert('Functionality not yet implemented.')
                                    }}
                                    style={search_style.selectionButton}>
                                        <Image source={require('../assets/pngs/triangle_down.png')} style={search_style.dropdownIcon}/>
                                        <Text style={[search_style.use_fontFamilyRegular, search_style.headerText]}>Entire Bible</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={search_style.searchSelection}>
                                    <Text style={[search_style.searchSelectionHeaderTitle, search_style.use_fontFamilyRegular]}>Choose Language:</Text>
                                    <TouchableOpacity 
                                    activeOpacity={0.4} 
                                    onPress={() => {
                                        alert('Functionality not yet implemented.')
                                    }}
                                    style={search_style.selectionButton}>
                                        <Image source={require('../assets/pngs/triangle_down.png')} style={search_style.dropdownIcon}/>
                                        <Text style={[search_style.use_fontFamilyRegular, search_style.headerText]}>English</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={search_style.searchInputContainer}>
                                <View style={search_style.searchInput}>
                                    <Image source={require('../assets/pngs/search.png')} style={search_style.searchIcon}/>
                                    <TextInput 
                                    selectionColor={'#203239'}
                                    placeholder="Search in the Bible"
                                    underlineColorAndroid="transparent"
                                    onChangeText={(inputQuery) => 
                                        this.setState({inputQuery}
                                    )}
                                    style={[search_style.searchInputText, search_style.use_fontFamilyRegular]}
                                    />
                                </View>

                                <TouchableOpacity 
                                activeOpacity={0.7} 
                                style={search_style.searchButton}
                                onPress={() => {
                                    Keyboard.dismiss();
                                    alert(this.state.inputQuery? this.state.inputQuery.trim() : 'No input query.')
                                }}
                                >
                                    <Text style={[search_style.searchButtonText, search_style.use_fontFamilyRegular]}>Search</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={search_style.searchResultsContainer}>
                                
                            </View>
                        </View>
                    </View>
                </Pressable>
            </KeyboardAvoidingView>
        )
    }
}