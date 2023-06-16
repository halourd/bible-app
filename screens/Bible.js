import "react-native-gesture-handler";
import { Component } from "react";
import {
  Animated,
  Text,
  View,
  ScrollView,
  Modal,
  TouchableHighlight,
} from "react-native";

import NavigationBar from "../components/NavigationBar";
import Swiper from '../node_modules/react-native-swiper'
import uuid from 'react-native-uuid'

import books from "../config/bible_books";
import ChapterSlide from "../components/bible/ChapterSlide";
import PageIndicator from "../components/bible/PageIndicator";

import bible_style from "../styles/SBible";
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
    };
  }

  render() {
    const onUserSwipe = (index) => {
      const newChapter = index + 1;
      this.setState({ chapterSelected: newChapter });
    }
  

    return (
      <Animated.View style={bible_style.container}>

        <PageIndicator
        book_selected_text={this.state.bookSelectedText}
        chapter_selected={this.state.chapterSelected}
        navigation={this.props.navigation}
        on_press={() => {
          this.setState({ isBookModalVisible: true });
        }}
        />

        <Swiper 
        style={{backgroundColor: '#eee'}}
        loop={false}
        index={0}
        loadMinimal={true}
        loadMinimalSize={1}
        showsPagination={false}
        onIndexChanged={(index)=>onUserSwipe(index)}
        >
          {
            countChapters(books[this.state.bookSelectedText]).map((item, index) => {
              return (
                  <View key={`${uuid.v4()}`}>
                    <ChapterSlide 
                    key={`${index}_${uuid}`}
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
              {
              Object.keys(books).map((book) => {
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
                      
                      console.log(this.state.bookSelectedText)
                    }}
                    key={`${uuid.v4()}`}
                    >
                    <View style={bible_style.bookListButton}>
                      <Text style={[bible_style.use_fontFamily]}>{book}</Text>
                    </View>
                  </TouchableHighlight>
                );
              })}
            </ScrollView>
          </View>
        </Modal>
        <NavigationBar name="Home" navigation={this.props.navigation} />
      </Animated.View>
    );
  }
}
