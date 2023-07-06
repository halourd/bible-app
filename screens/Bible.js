import "react-native-gesture-handler";
import Modal from "react-native-modal";
import React, { Component } from "react";
import {
  Animated,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  ToastAndroid
} from "react-native";

import NavigationBar from "../components/NavigationBar";
import Swiper from "../node_modules/react-native-swiper";
import uuid from "react-native-uuid";
import * as Clipboard from 'expo-clipboard'

import books from "../config/bible_books";
import ChapterSlide from "../components/bible/ChapterSlide";
import PageIndicator from "../components/bible/PageIndicator";

import bible_style from "../styles/SBible";
import search_style from '../styles/SSearch';
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

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
      current_chapter: 0,
      verseItemSelected: false,
      actionModalVisible: false,
      modalHeaderText: '',
      modalContentText: ''
    };
  }

  swiperRef = React.createRef();

  navigateSlide = (chapter) => {
    this.swiperRef.current.scrollTo(chapter - 1, true);
  };

  copyVerse = async (verse, content) => {
    let verse_content = `${verse}\n    ${content}`;
    await Clipboard.setStringAsync(verse_content);
    ToastAndroid.show("Verse copied!", ToastAndroid.SHORT);
  };

  render() {
    const onUserSwipe = (index) => {
      const newChapter = index + 1;
      this.setState({ chapterSelected: newChapter });
    };

    return (
      <Animated.View style={bible_style.container}>
        <PageIndicator
          book_selected_text={this.state.bookSelectedText}
          chapter_selected={this.state.chapterSelected}
          navigation={this.props.navigation}
          on_book_press={() => {
            this.setState({ isBookModalVisible: true });
          }}
          on_chapter_press={() => {
            this.setState({ isModalVisible: true });
          }}
        />

        <Swiper
          ref={this.swiperRef}
          style={{ backgroundColor: "#eee" }}
          loop={false}
          index={0}
          loadMinimal={true}
          loadMinimalSize={1}
          showsPagination={true}
          onIndexChanged={(index) => onUserSwipe(index)}
        >
          {countChapters(books[this.state.bookSelectedText]).map(
            (item, index) => {
              return (
                <View key={`${uuid.v4()}`}>
                  <ChapterSlide
                    key={`${index}_${uuid}`}
                    book_selected={this.state.bookSelectedText}
                    chapter_selected={item}
                    on_press={(verseNum, text)=>{
                      this.setState({
                        actionModalVisible: true,
                        modalHeaderText: `${this.state.bookSelectedText} ${this.state.chapterSelected}:${verseNum}`,
                        modalContentText: `${text}`
                      })
                    }}
                  />
                </View>
              );
            }
          )}
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

        <Modal
          animationIn={"fadeInUp"}
          animationOutTiming={200}
          isVisible={this.state.isBookModalVisible}
          style={bible_style.modalContainer}
          onBackdropPress={() => {
            this.setState({ isBookModalVisible: false });
          }}
          onModalHide={() => {
            this.setState({ isBookModalVisible: false });
          }}
        >
          <View style={bible_style.modalView}>
            <View style={bible_style.modalHeaderContainer}>
              <Text style={[bible_style.modalHeaderText]}>Select Book</Text>
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
                        current_chapter: 0,
                        isBookModalVisible: false,
                      });
                    }}
                    key={`${uuid.v4()}`}
                  >
                    <View style={bible_style.bookListButton}>
                      <Text
                        style={[bible_style.use_fontFamily, { color: "white" }]}
                      >
                        {book}
                      </Text>
                    </View>
                  </TouchableHighlight>
                );
              })}
            </ScrollView>
          </View>
        </Modal>

        <Modal
          animationIn={"fadeInUp"}
          animationOutTiming={200}
          isVisible={this.state.isModalVisible}
          style={bible_style.modalContainer}
          onBackdropPress={() => {
            this.setState({ isModalVisible: false });
          }}
          onModalHide={() => {
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
                      this.setState(
                        {
                          chapterSelected: item,
                          isModalVisible: false,
                        },
                        () => {
                          this.navigateSlide(item);
                        }
                      );
                    }}
                    key={`${uuid.v4()}`}
                  >
                    <View style={bible_style.chapterListButton}>
                      <Text
                        style={[bible_style.use_fontFamily, { color: "white" }]}
                      >
                        Chapter {item}
                      </Text>
                    </View>
                  </TouchableHighlight>
                );
              })}
            </ScrollView>
          </View>
        </Modal>

        <Modal
          animationIn={"fadeInUp"}
          animationOut={`fadeOutDown`}
          animationOutTiming={200}
          onBackdropPress={() => {
            this.setState({ actionModalVisible: false });
          }}
          onModalHide={() => {
            this.setState({ actionModalVisible: false });
          }}
          isVisible={this.state.actionModalVisible}
          style={search_style.resultActionModal}
        >
          <View style={search_style.resultModalContainer}>
            <View style={search_style.modalHeader}>
              <Text style={search_style.modalHeaderText}>
                {this.state.modalHeaderText}
              </Text>
            </View>
            <View style={search_style.modalContent}>
              <Text style={search_style.modalContentText}>
                {this.state.modalContentText}
              </Text>
            </View>
            <View style={search_style.modalActionContainer}>
              <TouchableOpacity
                style={search_style.actionButton}
                onPress={() => {
                  this.copyVerse(
                    this.state.modalHeaderText,
                    this.state.modalContentText
                  );
                  this.setState({ actionModalVisible: false });
                }}
              >
                <View style={{ display: "flex", alignItems: "center" }}>
                  <Text style={search_style.actionText}>Copy to Clipboard</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={search_style.actionButton}
                onPress={()=> {
                  ToastAndroid.show('Feature Unavailable. Coming Soon! ', ToastAndroid.SHORT)
                }}
              >
                <View style={{ display: "flex", alignItems: "center" }}>
                  <Text style={search_style.actionText}>
                    Append to current note
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <NavigationBar name="Home" navigation={this.props.navigation} />
      </Animated.View>
    );
  }
}
