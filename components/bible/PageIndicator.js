import { Component } from "react";
import { View, Text, TouchableOpacity, TouchableHighlight, Image, ScrollView, Modal } from "react-native";

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
          activeOpacity={0.8}
          delayPressIn={0}
          style={bible_style.SelectionButtons}
          onPress={this.props.on_press}
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
          activeOpacity={0.8}
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
        <TouchableOpacity
          activeOpacity={0.8}
          style={[bible_style.SelectionButtons, {
            paddingHorizontal: 0,
            paddingVertical: 12,
            backgroundColor: "#E0DDAA",
          }]}
          onPress={() => {
            this.props.navigation.navigate('Search')
          }}
        >
        <Image
              style={bible_style.searchIcon}
              source={require("../../assets/pngs/search.png")}
            />
        </TouchableOpacity>



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
              source={require("../../assets/pngs/search.png")}
            />
            <Text
              style={[bible_style.searchButtonText, bible_style.use_fontFamily]}
            >
              Search Word
            </Text>
          </View>
        </TouchableHighlight> */}



      </View>

      
    );
  }
}
