import { Component } from "react";
import { View, Text, TouchableOpacity, TouchableHighlight, ScrollView, Modal } from "react-native";

import bible_style from "../../styles/SBible";

import books from "../../config/bible_books";

export default class ChapterSlide extends Component {
    constructor(props){
        super(props);

        this.state = {
            isBookModalVisible: false,
            isModalVisible: false,
            bookSelected: 1,
            bookSelectedText: "Genesis",
            chapterSelected: 1,
            current_chapter: 0,
            verseItemSelected: false,
        }
    }
  render() {
    return (
      <View style={bible_style.Selection}>
        <TouchableOpacity
            activeOpacity={0.9}
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
            {this.props.book_selected_text}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={bible_style.SelectionButtons}
        //   onPress={() => this.setState({ isModalVisible: true })}
        >
          <Text
            style={[
              bible_style.selectionButtonText,
              bible_style.use_fontFamily,
            ]}
          >
            Chapter {this.props.chapter_selected}
          </Text>
        </TouchableOpacity>
      </View>

      
    );
  }
}
