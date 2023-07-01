import "react-native-gesture-handler";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  ActivityIndicator
} from "react-native";

import sync_style from "../styles/SSync";

import * as Clipboard from "expo-clipboard";

import {generate_code, listen_for_copy, send_request, remove_listener} from '../helper/sync/synchronization'


export default class Sync extends Component {

  constructor(props){
    super(props);

    this.state = {
      code: generate_code(),
      syncingCode: '',
      isSyncButtonDisabled: true,
      onSync: false
    }
  }

  componentDidMount() {
    listen_for_copy(this.state.code);
  }

  componentDidUpdate(prevProps){
    if(prevProps.route.params !== this.props.route.params){
      this.setState({code: generate_code()}, ()=>{
        listen_for_copy(this.state.code)
      })
    }
  }

  componentWillUnmount() {
    remove_listener(this.state.code)
  }

  copyToClipboard = async () => {
    await Clipboard.setStringAsync(this.state.code);
    ToastAndroid.show('Code successfully copied', ToastAndroid.SHORT);
  }

  getClipboardValue = async () => {
    const clipboardContent = await Clipboard.getStringAsync();
    console.log(clipboardContent);
  }


  render() {
    
    return (
      <View style={sync_style.mainContainer}>
        {/* Header Title */}
        <View style={sync_style.headerContainer}>
          <TouchableOpacity
            onPress={() => { 
              remove_listener(this.state.code)
              this.props.navigation.navigate('Notes')
            }}
          >
          <View style={sync_style.backButtonContainer}>
            <Image source={require('../assets/pngs/arrow_left.png')} style={sync_style.backButtonImage} />
            </View>
            </TouchableOpacity>

          <View style={sync_style.titleContainer}>
            <Text style={sync_style.titleName}>Sync</Text>
          </View>
        </View>
        {/* Sync from other device */}
        <View style={sync_style.container1}>
          <View style={sync_style.subContainer1}>
            <Image source={require("../assets/pngs/sync_block2.png")} style={ sync_style.subContainer1Image} />
          </View>

          <View style={sync_style.subContainer2}>
            <Text style={sync_style.syncLabel}>Share your notes to other</Text>
            <TextInput
              onChangeText={(text) => {
                this.setState({ syncingCode: text }, ()=> {
                  if(this.state.syncingCode.length==6){
                    if(this.state.syncingCode==this.state.code){
                      this.setState({isSyncButtonDisabled: true})
                    }else{
                      this.setState({isSyncButtonDisabled: false})
                    }
                  }else{
                    this.setState({isSyncButtonDisabled: true})
                  }
                })
              }}
              maxLength={6}
              keyboardType="Numeric"
              cursorColor={'#203239'}
              style={sync_style.codeInputBox}
              placeholder="Enter shared code here"
            />

            
            <TouchableOpacity 
            activeOpacity={0.6} 
            disabled={this.state.isSyncButtonDisabled}
            style={this.state.isSyncButtonDisabled?
              sync_style.syncButtonDisabled:
              sync_style.syncButton
            }
            onPress={()=> {
              if(!this.state.syncingCode){
                alert('Please input shared code')
                return
              }
              
              this.setState({onSync: true,isSyncButtonDisabled: true})
              send_request(this.state.syncingCode, ()=>{
                remove_listener(this.state.code)
                this.setState({onSync: false})
                this.props.navigation.navigate('Notes', {has_new_note: true})
              })
            }}
            >
              <View style={sync_style.buttonImgContainer}>
                <Image
                  source={require("../assets/pngs/sync.png")}
                  style={sync_style.buttonImg}
                />
              </View>
              <View style={sync_style.buttonTextContainer}>
                <Text style={sync_style.buttonText}>Start syncing</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>


        {/* Share your notes to others */}
          <View style={sync_style.container1}>
            <View style={sync_style.subContainer1}>
            <Image source={require("../assets/pngs/sync_block1.png")} style={sync_style.subContainer2Image} />
            </View>

            <View style={sync_style.subContainer2}>
              <Text style={sync_style.syncLabel}>
                Get notes from a User
            </Text>
            
            <View style={sync_style.codeInputBox2}>
              <Text style={sync_style.codeText}>{this.state.code}</Text>
            </View>
            
              <TouchableOpacity 
              activeOpacity={0.6} 
              style={sync_style.syncButton}
              onPress={()=> {
                this.copyToClipboard()
              }}
              
              >
                <View style={sync_style.buttonImgContainer}>
                  <Image
                    source={require("../assets/pngs/copy.png")}
                    style={sync_style.buttonImg}
                  />
                </View>
                <View style={sync_style.buttonTextContainer}>
                  <Text style={sync_style.buttonText}>Copy shared code</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        {/* <NavigationBar name="Home" navigation={this.props.navigation} /> */}
        {
          this.state.onSync?(
            <View style={{flex: 1, justifyContent: 'center'}}>
              <ActivityIndicator animating={this.state.onSync} size="large" color="#142E65" />
              <Text style={[sync_style.codeText, {paddingVertical: 20}]}>Syncing</Text>
            </View>
          ):null
        }
      </View>
    );
  }
}