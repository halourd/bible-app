import {Component} from 'react'
import { Text, View, Image, TouchableNativeFeedback } from 'react-native'
import SNavBar from '../styles/component/SNavBar'

// import SvgUri from 'react-native-svg-uri'

export default class NavigationBar extends Component {
    render(){
        return(
            <View style={[SNavBar.mainContainer, {...this.props.navBarStyle}]}>
                <TouchableNativeFeedback 
                useForeground={true} 
                onPress={()=>{
                    this.props.navigation.navigate('Home')
                }}
                background={TouchableNativeFeedback.SelectableBackground()
                }>
                    <View style={SNavBar.buttonContainer}>
                        <Image style={SNavBar.iconSvg} source={require('../assets/pngs/home.png')}/>
                        <Text style={[SNavBar.label, SNavBar.use_fontFamily]}>{this.props.name}</Text>
                    </View>

                </TouchableNativeFeedback> 

                <TouchableNativeFeedback 
                 onPress={()=>{
                    this.props.navigation.navigate('Bible')
                 }}
                useForeground={true}>
                    <View style={SNavBar.buttonContainer}>
                        <Image style={[SNavBar.iconSvg, {width: 29, height: 29}]} source={require('../assets/pngs/open-book.png')}/>
                        <Text style={[SNavBar.label, SNavBar.use_fontFamily]}>Bible</Text>
                    </View>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback 
                    onPress={()=>{
                        this.props.navigation.navigate('Notes')
                    }}
                useForeground={true}>
                    <View style={SNavBar.buttonContainer}>
                        <Image style={SNavBar.iconSvg} source={require('../assets/pngs/note.png')}/>
                        <Text style={[SNavBar.label, SNavBar.use_fontFamily]}>Notes</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }
}