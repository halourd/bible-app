// STYLING FOR HOMPAGE VIEW

import {StyleSheet} from "react-native";

const home_style = StyleSheet.create ({
    container: {
        position: 'relative',
        zIndex: -1,
        flex: 1,
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
        paddingTop:60,
        paddingVertical:20,
        flexDirection: "row",
        alignItems: 'center',
        backgroundColor: 'rgba',
        width: '100%',
    },
    menu: {
        width: 20,
        height: 20,
        marginBottom: 2,
        marginRight: 20,
        marginLeft: 20 
    },
    title: {
        fontSize: 20,
        fontFamily: 'ProductSans-Bold',
    },
    votdContainer: {
        justifyContent: 'center',
        padding: 30,
        marginTop: 5,
        marginHorizontal: 20,
    },
    verse: {
        fontSize: 19,
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
        margin: 10,
        height: 200,
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
        height: '90%',
        width: '100%',
        borderRadius: 10,
        marginBottom: 10,
        resizeMode: 'cover'
    },

    thumbnail_container: {
        justifyContent: 'center',
        alignSelf: 'center',
        width: 220,
        height: 130,
        marginVertical: 10,

    }
})

export default home_style;