import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  StyleSheet,
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
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import NavigationBar from "../components/NavigationBar";

import Corinthians_1 from "../chunks/1 Corinthians";
import books from "../config/bible_books";

import bible_style from "../styles/SBible";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
// import { FlatList } from 'react-native-gesture-handler';

const displayChapter = (book, chapterNum) => {
  for (let chapters of book) {
    if (chapters.chapter == chapterNum) {
      return chapters.verse;
    }
  }
};

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
      bookSelectedText: "Matthew",
      chapterSelected: 1,
      verseItemSelected: false,
    };
  }

  render() {
    return (
      <View style={bible_style.container}>
        <View style={bible_style.Selection}>
          <TouchableOpacity
            delayPressIn={0}
            style={bible_style.SelectionButtons}
            onPress={() => this.setState({ isBookModalVisible: true })}
          >
            <Text
              style={[
                bible_style.selectionButtonText,
                bible_style.use_fontFamily,
              ]}
            >
              {/* {console.log(books[this.state.bookSelectedText])} */}
              {this.state.bookSelectedText}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={bible_style.SelectionButtons}
            onPress={() => this.setState({ isModalVisible: true })}
          >
            <Text
              style={[
                bible_style.selectionButtonText,
                bible_style.use_fontFamily,
              ]}
            >
              
              Chapter {this.state.chapterSelected}
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView>
          <View style={bible_style.scrollView}>
            {books[this.state.bookSelectedText].map((item, index) => {
              if (
                item.book_name == this.state.bookSelectedText &&
                item.chapter == this.state.chapterSelected
              )
                return (
                  <TouchableNativeFeedback
                    onPress={() => {
                      this.setState({ verseItemSelected: true });
                    }}
                  >
                    <View style={bible_style.VerseViewContainer}>
                      <View style={bible_style.verseNumber}>
                        <Text
                          style={[
                            bible_style.verse_numberText,
                            bible_style.use_fontFamily,
                          ]}
                        >
                          {item.verse}
                        </Text>
                      </View>
                      <View style={bible_style.verseTextContainer}>
                        <Text
                          style={[
                            bible_style.verse_text,
                            bible_style.use_fontFamily,
                          ]}
                        >
                          {item.text}
                        </Text>
                      </View>
                    </View>
                  </TouchableNativeFeedback>
                );
            })}
          </View>
        </ScrollView>

        {/* <FlatList
          data={Corinthians_1}
          renderItem={({ item }) => {
            <View style={style.VerseViewContainer}>
              <View style={style.verseNumber}>
                <Text>{item.verse}</Text>
              </View>
              <View style={style.verseText}>
                <Text>{item.text}</Text>
              </View>
            </View>;
          }}
          keyExtractor={(item) => item.verse}
        /> */}

        {/* Search Button */}
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor={"#DDDDDD"}
          style={bible_style.searchButtonContainer}
          onPress={() => {
            alert("This will redirect user to search page");
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
        </TouchableHighlight>

        <Modal
          animationType="slide"
          visible={this.state.isBookModalVisible}
          style={bible_style.modalContainer}
          statusBarTranslucent={true}
          onRequestClose={() => {
            this.setState({ isBookModalVisible: false });
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
                Select Book
              </Text>
            </View>
            <ScrollView style={bible_style.bookListContainer}>
              {Object.keys(books).map((book) => {
                return (
                  <TouchableHighlight
                    underlayColor={"#ccc"}
                    style={bible_style.bookList}
                    onPress={() => {
                      this.setState({
                        bookSelectedText: book,
                        isBookModalVisible: false,
                      });
                      
                    }}>
                    <View style={bible_style.bookListButton}>
                      <Text style={[bible_style.use_fontFamily]}>{book}</Text>
                    </View>
                  </TouchableHighlight>
                );
              })}
            </ScrollView>
          </View>
        </Modal>

        <Modal
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
        </Modal>

        <NavigationBar name="Home" navigation={this.props.navigation} />
      </View>
    );
  }
}
