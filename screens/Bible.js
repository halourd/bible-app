import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Modal,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import NavigationBar from "../components/NavigationBar";

import Corinthians_1 from "../chunks/1 Corinthians";
import bible_style from "../styles/SBible";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
// import { FlatList } from 'react-native-gesture-handler';

const style = bible_style;

const chapterLength = Corinthians_1.length - 1;

const displayChapter = (book, chapterNum) => {
  for (let chapters of book) {
    if (chapters.chapter == chapterNum) {
      return chapters.verse;
    }
  }
};

// const countChapters = (book) => {
//     let chapters = [];
//     for (let chapter of book) {
//         if (!chapters.includes(chapter.chapter)) {
//         chapters.push(chapter.chapter);
//         }
//     }
//     return chapters;
// }

export default class Bible extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalVisible: false,
      bookSelected: 46,
      chapterSelected: 1,
    };
  }
  render() {
    return (
      <View style={style.container}>
        <View style={style.Selection}>
          <TouchableOpacity delayPressIn={0} style={style.SelectionButtons}>
            <Text>1 Corinthians</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.SelectionButtons}
            onPress={() => this.setState({ isModalVisible: true })}
          >
            <Text>Chapter {this.state.chapterSelected}</Text>
          </TouchableOpacity>
        </View>

        <ScrollView>
          {Corinthians_1.map((item, index) => {
            if (item.book == 46 && item.chapter == this.state.chapterSelected)
              return (
                <View style={style.VerseViewContainer}>
                  <View style={style.verseNumber}>
                    <Text>{item.verse}</Text>
                  </View>
                  <View style={style.verseText}>
                    <Text>{item.text}</Text>
                  </View>
                </View>
              );
          })}
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

        {/* <ScrollView>
                    <View style={style.VerseViewContainer}>
                        <View style={style.verseNumber}>
                            <Text>1</Text>
                        </View>
                        <View style={style.verseText}>
                            <Text>
                                Si Pablo, na tinawag na maging apostol ni Jesucristo sa pamamagitan ng kalooban ng Dios, at si Sostenes na ating kapatid, 
                            </Text>
                        </View>
                    </View>
                    <View style={style.VerseViewContainer}>
                        <View style={style.verseNumber}>
                            <Text>1</Text>
                        </View>
                        <View style={style.verseText}>
                            <Text>
                                Si Pablo, na tinawag na maging apostol ni Jesucristo sa pamamagitan ng kalooban ng Dios, at si Sostenes na ating kapatid, 
                            </Text>
                        </View>
                    </View>

                </ScrollView> */}

        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.isModalVisible}
          style={bible_style.modalContainer}
          onRequestClose={() => {
            this.setState({ isModalVisible: false });
          }}
        >
          <View style={bible_style.modalView}>
            <View style={bible_style.modalHeaderContainer}>
              <Text style={bible_style.modalHeaderText}>Select Chapter</Text>
            </View>
            <ScrollView style={bible_style.chapterListContainer}>

            </ScrollView>
          </View>
        </Modal>

        <NavigationBar name="Home" />
      </View>
    );
  }
}
