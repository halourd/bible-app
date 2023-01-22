// STYLING FOR HOMPAGE VIEW

import {StyleSheet} from "react-native";

const home_style = StyleSheet.create ({
    container: {
        position: 'relative',
        zIndex: -1,
        flex: 1
    },
    use_fontFamilyRegular: {
        fontFamily: 'ProductSans-Regular'
    },
    use_fontFamilyBold: {
        fontFamily: 'ProductSans-Bold'
    },

    homeBg: {
        flex: 1
    },
    homeNavbar: {
        marginTop: 50,
        paddingVertical:20,
        flexDirection: "row",
    },
    menu: {
        width: 25,
        height: 30,
        marginBottom: 2,
        marginRight: 20,
        marginLeft: 20 
    },
    title: {
        fontSize: 24,
        fontFamily: 'ProductSans-Bold',
    },
    votdContainer: {
        justifyContent: 'center',
        padding: 30,
        marginTop: 5,
        marginHorizontal: 20,
    },
    verse: {
        fontSize: 21,
        fontFamily: 'ProductSans-Bold'
    },
    verseTitle: {
        marginTop: 30,
        fontSize: 16,
    },
    videosContainer: {
        justifyContent: 'center',
    },
    vidHeader: {
        fontSize: 22,
        fontFamily: 'ProductSans-Bold',
        marginLeft: 40,
        marginVertical: 10
    },
    videos:{
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: 'white',
        padding: 20,
        height: 150,
        width: 250,
        marginHorizontal: 15,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 10
    },
    thumbnail: {
        justifyContent:'center',
        alignSelf: 'center',
        height: 100,
        width: 230,
        borderRadius: 10,
        marginBottom: 5
    }

})

export default home_style;