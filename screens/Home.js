import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Component } from "react";
import {
  Text,
  ScrollView,
  View,
  FlatList,
  TouchableNativeFeedback,
  TouchableOpacity,
  Image,
  ImageBackground,
  Linking,
} from "react-native";
import NavigationBar from "../components/NavigationBar";
import uuid from "react-native-uuid";

import Proverbs from "../chunks/Proverbs";
import Psalms from "../chunks/Psalms";

import home_style from "../styles/SHome";
import { get_latest_videos } from "../helper/api/ytapi";
import { getStorage } from "../helper/storage/async-storage";
import { setStorage } from "../helper/storage/async-storage";

const style = home_style;

const Item = ({ title, image, videoId }) => (
  <TouchableNativeFeedback
    onPress={() =>
      Linking.openURL(`vnd.youtube://www.youtube.com/watch?v=${videoId}`).then(
      )
    }
  >
    <View style={style.videos}>
      <View style={style.thumbnail_container}>
        <Image source={image} style={style.thumbnail} />
        <Text
          style={{
            fontFamily: "ProductSans-Bold",
            marginBottom: 10,
          }}
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {title}
        </Text>
      </View>
    </View>
  </TouchableNativeFeedback>
);

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      votd: {
        bookname: "",
        chapter: "",
        verse: "",
      },

      videos: [],
    };

    // this.handleYTFetch = this.handleYTFetch.bind(this)
  }

  // updateVerseInterval = () => {
  //     this.verseUpdateInterval = setInterval(this.updateDailyVerse, 24 * 60 * 60 * 1000);
  // }

  handleYTFetch = async () => {
    const api_key = "AIzaSyCHqzINr8faGkMvyp8Jj1AEa51CLxNOGlU";
    const channel_id = "UCFRj7FPKTthzA_gfE2PsGJQ";
    // const [video_id, video_title, video_thumbnail] = YT_API.get_latest_videos(api_key, channel_id)
    const fetched_videos = await get_latest_videos(api_key, channel_id);
    this.setState({ videos: fetched_videos });
    console.log("[STATE]", this.state.videos);
    // return fetched_videos;
  };

  componentDidMount() {
    this.scanBookAndGenerateRandVerse([Proverbs, Psalms]);
    this.handleYTFetch();
  }

  scanBookAndGenerateRandVerse = (book) => {
    let chosen_book = book[Math.floor(Math.random() * book.length)];
    let get_rand_num = Math.floor(Math.random() * chosen_book.length);
    this.setState({
      votd: {
        key: get_rand_num,
        bookname: chosen_book[get_rand_num].book_name,
        chapter: chosen_book[get_rand_num].chapter,
        verse: chosen_book[get_rand_num].text,
        verse_number: chosen_book[get_rand_num].verse,
      },
    });
  };

  render() {
    return (
      <View style={style.container}>
        <StatusBar style="auto" />
        <ScrollView>
          <ImageBackground
            source={require("../assets/bg/home_bg.png")}
            resizeMode="cover"
            style={style.homeBg}
          >
            <View style={style.homeNavbar}>
              <TouchableOpacity>
                <Image
                  style={style.menu}
                  source={require("../assets/pngs/burger-menu.png")}
                />
              </TouchableOpacity>
              <Text style={style.title}>Biblecite</Text>
            </View>
            <View>
              <View style={style.votdContainer}>
                <Text style={[style.verse, style.use_fontFamilyRegular]}>
                  {`"${this.state.votd.verse}"`}
                </Text>
                <Text style={[style.verseTitle, style.use_fontFamilyRegular]}>
                  {this.state.votd.bookname} {this.state.votd.chapter}:
                  {this.state.votd.verse_number}
                  {"\n"}
                  <Text style={{ fontSize: 12, fontStyle: "italic" }}>
                    Ang Dating Biblia 1905
                  </Text>
                </Text>
              </View>
              <View style={style.videosContainer}>
                <Text style={style.vidHeader}>Videos</Text>
                <FlatList
                  data={this.state.videos}
                  renderItem={({ item, videoId }) => (
                    <Item
                      key={videoId}
                      title={item.snippet.title}
                      image={{ uri: `${item.snippet.thumbnails.high.url}` }}
                      videoId={item.id.videoId}
                    />
                  )}
                  key={`${uuid.v4()}`}
                  horizontal
                  contentContainerStyle={{ margin: 20 }}
                  contentInsetAdjustmentBehavior="never"
                  snapToAlignment="center"
                  decelerationRate="fast"
                  automaticallyAdjustContentInsets={false}
                  showsHorizontalScrollIndicator={false}
                  showsVerticalScrollIndicator={false}
                  scrollEventThrottle={1}
                  snapToInterval={300}
                  contentOffset={{ 50: 50 }}
                />
              </View>
              <View style={style.Selection}>
                <TouchableOpacity
                  delayPressIn={0}
                  style={style.SelectionButtons}
                ></TouchableOpacity>
                <TouchableOpacity
                  style={style.SelectionButtons}
                ></TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </ScrollView>
        <NavigationBar name="Home" navigation={this.props.navigation} />
      </View>
    );
  }
}
