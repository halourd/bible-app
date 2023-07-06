import 'react-native-gesture-handler';
import Modal from 'react-native-modal'
import React, { Component } from 'react';
import * as Clipboard from 'expo-clipboard';
import {Pressable, ToastAndroid, KeyboardAvoidingView, Keyboard, Text, View, FlatList, ScrollView, TouchableOpacity, Image} from 'react-native';

import search_style from '../styles/SSearch';
import { TextInput } from 'react-native-gesture-handler';
import CustomHeader from '../components/CustomHeader';
import uuid from 'react-native-uuid'

import books from '../config/bible_books';


export default class Search extends Component{
    constructor(props){
        super(props)
        this.books = books
        this.state = {
            isSearchModalVisible: false,
            isLanguageModalVisible: false,
            selectedSearch: 'Entire Bible',
            selectedLanguage: 'Tagalog',
            inputQuery: '',
            searchResults: [],
            resultMessage: '',
            resultActionModalVisible: false,
            modalHeaderText: '',
            modalContentText: '',
            searchButtonLabel: 'Search'

        }
    }
    searchWordInBooks(word, callback) {
        const results = [];
        // const words = book.text.split(/\s+/);

        if(!word){
            return
        }
        
        console.log(`Searching for: ${word}`)
        Object.entries(books).forEach(([bookName]) => {
            books[`${bookName}`].forEach((book, index) => {
                if(book.text.includes(`${word}`)){
                    console.log(book.book_name, book.chapter, book.verse, book.text)
                    results.push({id: uuid.v4(), book_name: book.book_name, chapter: book.chapter, verse: book.verse, text: book.text})
                }
                // console.log(typeof book[1].book)
            });
        });

        this.setState({searchResults: results})

        callback?callback(results):null
      }

      copyVerse = async (verse, content) => {
        let verse_content = `${verse}\n    ${content}`;
        await Clipboard.setStringAsync(verse_content);
        ToastAndroid.show("Verse copied!", ToastAndroid.SHORT);
      };

    render(){
        const word = this.state.inputQuery
        return(
            <View style={[search_style.container]}>
                <CustomHeader 
                navigation={this.props.navigation}
                go_to_page="Bible"
                />
                <Pressable onPress={()=> {Keyboard.dismiss()}}>
                    {/* <View style={search_style.searchHeaderContainer}>
                        <TouchableOpacity 
                        activeOpacity={0.4} 
                        style={search_style.searchHeader}
                        onPress={() => this.props.navigation.navigate('Bible')}
                        >
                            <Image source={require('../assets/pngs/arrow_left.png')} style={search_style.searchIcon}/>
                        </TouchableOpacity>
                        <Text style={[search_style.searchHeaderText, search_style.use_fontFamilyBold]}>Search</Text>
                    </View> */}

                    <View style={search_style.searchBodyContainer}>
                        <KeyboardAvoidingView style={search_style.searchBody}>
                            <View style={search_style.selectionContainer}>
                                {/* <View style={search_style.searchSelection}>
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
                                </View> */}
                                {/* <View style={search_style.searchSelection}>
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
                                </View> */}
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
                                    if(this.state.inputQuery.trim()==''){
                                        ToastAndroid.showWithGravityAndOffset("Please input word to search",ToastAndroid.SHORT, 0, 0, 0);
                                    }
                                    Keyboard.dismiss();
                                    // alert(this.state.inputQuery? this.state.inputQuery.trim() : 'No input query.')
                                    this.searchWordInBooks(this.state.inputQuery, (results)=>{
                                        if(results.length>0){
                                            this.setState({
                                                resultMessage: `Showing ${results.length} results for "${word}"`
                                        })
                                        }else{
                                            this.setState({resultMessage:`No words or phrases found.`})
                                        }
                                    })
                                }}
                                >
                                    <Text style={[search_style.searchButtonText, search_style.use_fontFamilyRegular]}>{this.state.searchButtonLabel}</Text>
                                </TouchableOpacity>
                            </View>
                        </KeyboardAvoidingView>

                            <View style={search_style.resultHeaderTitleContainer}>
                                <Text style={search_style.resultHeaderText}>{this.state.resultMessage}</Text>
                            </View>
                            
                    </View>
                
                </Pressable>
                <FlatList 
                data={this.state.searchResults}
                style={search_style.searchResultsContainer}
                contentContainerStyle={{paddingBottom: '30%'}}
                scrollEnabled={true}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity 
                        activeOpacity={0.4}
                        style={search_style.resultBlockContainer}
                        onPress={()=>{
                            this.setState({
                                resultActionModalVisible: true,
                                modalHeaderText: `${item.book_name} ${item.chapter}:${item.verse}`,
                                modalContentText: `${item.text}`
                            })
                        }}
                        >
                            <Text style={search_style.resultBlockHeading}>{item.book_name} {item.chapter}:{item.verse}</Text>
                            <Text>{item.text}</Text>
                        </TouchableOpacity>
                    )
                }}
                keyExtractor={item => item.id}
                contentInsetAdjustmentBehavior="always"
                snapToAlignment="center"
                decelerationRate="normal"
                automaticallyAdjustContentInsets={false}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={1}
                />

                <Modal 
                animationIn={'fadeInUp'}
                animationOut={`fadeOutDown`}
                animationOutTiming={200}
                onBackdropPress={()=>{
                    this.setState({ resultActionModalVisible: false });
                }}
                onModalHide={() => {
                    this.setState({ resultActionModalVisible: false });
                }}               
                isVisible={this.state.resultActionModalVisible}
                style={search_style.resultActionModal}
                >
                    <View style={search_style.resultModalContainer}>
                        <View style={search_style.modalHeader}>
                            <Text style={search_style.modalHeaderText}>{this.state.modalHeaderText}</Text>
                        </View>
                        <View style={search_style.modalContent}>
                            <Text style={search_style.modalContentText}>{this.state.modalContentText}</Text>
                        </View>
                        <View style={search_style.modalActionContainer}>
                            <TouchableOpacity
                            style={search_style.actionButton}
                            onPress={()=>{
                                this.copyVerse(this.state.modalHeaderText, this.state.modalContentText)
                                this.setState({ resultActionModalVisible: false });
                            }}
                            >
                                <View style={{display: 'flex', alignItems: 'center'}}>
                                    <Text style={search_style.actionText}>Copy to Clipboard</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                            style={search_style.actionButton}
                            onPress={()=> {
                                ToastAndroid.show('Feature Unavailable. Coming Soon! ', ToastAndroid.SHORT)
                              }}
                            >
                                <View style={{display: 'flex', alignItems: 'center'}}>
                                    <Text style={search_style.actionText}>Append to current note</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                </Modal>

            </View>
        )
    }
}