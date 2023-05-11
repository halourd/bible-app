import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  StyleSheet,
  Animated,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Modal,
  TouchableHighlight,
  TouchableNativeFeedback,
} from "react-native";
// import { useIsFocused } from "@react-navigation/native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
import NavigationBar from "../components/NavigationBar";
import Swiper from '../node_modules/react-native-swiper'

import books from "../config/bible_books";
import ChapterSlide from "../components/bible/ChapterSlide";
import PageIndicator from "../components/bible/PageIndicator";

import bible_style from "../styles/SBible";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
// import { FlatList } from 'react-native-gesture-handler';

const countChapters = (book) => {
  let chapters = [];
  for (let chapter of book) {
    if (!chapters.includes(chapter.chapter)) {
      chapters.push(chapter.chapter);
    }
  }
  return chapters;
};

export default class Bible extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalVisible: false,
      isBookModalVisible: false,
      bookSelected: 1,
      bookSelectedText: "Genesis",
      chapterSelected: 1,
      current_index: 0,
      verseItemSelected: false,
    };
  }

  render() {
    return (
      <Animated.View style={bible_style.container}>
        <PageIndicator
        book_selected_text={this.state.bookSelectedText}
        chapter_selected={this.state.chapterSelected}
        />
        <Swiper 
        style={{backgroundColor: '#eee'}}
        loop={false}
        index={0}
        loadMinimal={true}
        loadMinimalSize={1}
        showsPagination={false}
        >
          {
            countChapters(books[this.state.bookSelectedText]).map((item, index) => {
              console.log(item)
              return (
                  <View>
                    <ChapterSlide 
                    key={`${index}_${item}`}
                    book_selected={this.state.bookSelectedText}
                    chapter_selected={item}
                    />
                  </View>
              )
            })
          }
        </Swiper>


        {/* Search Button */}
        {/* <TouchableHighlight
          activeOpacity={0.6}
          underlayColor={"#DDDDDD"}
          style={bible_style.searchButtonContainer}
          onPress={() => {
            this.props.navigation.navigate('Search')
          }}
        >
          <View style={bible_style.searchButton}>
            <Image
              style={bible_style.searchIcon}
              source={require("../assets/pngs/search.png")}
            />
            <Text
              style={[bible_style.searchButtonText, bible_style.use_fontFamily]}
            >
              Search Word
            </Text>
          </View>
        </TouchableHighlight> */}


        {/* <Modal
          animationType="slide"
          visible={this.state.isModalVisible}
          style={bible_style.modalContainer}
          statusBarTranslucent={true}
          onRequestClose={() => {
            this.setState({ isModalVisible: false });
          }}
        >
          <View style={bible_style.modalView}>
            <View style={bible_style.modalHeaderContainer}>
              <Text
                style={[
                  bible_style.modalHeaderText,
                  bible_style.use_fontFamily,
                ]}
              >
                Select Chapter
              </Text>
            </View>
            <ScrollView style={bible_style.chapterListContainer}>
              {countChapters(books[this.state.bookSelectedText]).map((item) => {
                return (
                  <TouchableHighlight
                    underlayColor={"#ccc"}
                    style={bible_style.chapterList}
                    onPress={() => {
                      this.setState({
                        chapterSelected: item,
                        isModalVisible: false,
                      });
                    }}
                  >
                    <View style={bible_style.chapterListButton}>
                      <Text style={[bible_style.use_fontFamily]}>
                        Chapter {item}
                      </Text>
                    </View>
                  </TouchableHighlight>
                );
              })}
            </ScrollView>
          </View>
        </Modal> */}

        <NavigationBar name="Home" navigation={this.props.navigation} />
      </Animated.View>
    );
  }
}
