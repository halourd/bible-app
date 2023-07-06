import { Component } from "react";
import {
  View,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
} from "react-native";
import uuid from "react-native-uuid";

import * as Clipboard from "expo-clipboard";

import bible_style from "../../styles/SBible";

import books from "../../config/bible_books";
export default class ChapterSlide extends Component {
  copyVerse = async (verse, content) => {
    let verse_content = `${verse}\n    ${content}`;
    await Clipboard.setStringAsync(verse_content);
    ToastAndroid.show("Verse copied!", ToastAndroid.SHORT);
  };

  render() {
    return (
      <ScrollView
        ref={(ref) => {
          this.scrollView = ref;
        }}
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={true}
        fadingEdgeLength={300}
        key={`${uuid.v4()}`}
      >
        <View
          // key={`${this.props.book_selected}_${this.props.chapter_selected}`}
          key={`${uuid.v4()}`}
          style={bible_style.scrollView}
        >
          {books[this.props.book_selected].map((item, index) => {
            if (
              item.book_name == this.props.book_selected &&
              item.chapter == this.props.chapter_selected
            )
              return (
                <TouchableOpacity
                  onPress={() => {
                    this.setState({ verseItemSelected: true });
                    this.props.on_press(item.verse, item.text)
                  }}
                  key={`${uuid.v4()}`}
                  onLongPress={() => {
                    this.copyVerse(
                      `${item.book_name} ${item.chapter}:${item.verse}`,
                      item.text
                    );
                  }}
                >
                  <View
                    key={`${uuid.v4()}`}
                    style={bible_style.VerseViewContainer}
                  >
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
                </TouchableOpacity>
              );
          })}
        </View>
      </ScrollView>
    );
  }
}
