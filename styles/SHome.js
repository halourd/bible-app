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
        marginTop: 40,
        margin: 25
    },
    verse: {
        fontSize: 21,
        fontFamily: 'ProductSans-Bold'
    },
    verseTitle: {
        marginTop: 30,
        fontSize: 16,
        fontFamily: 'ProductSans-Italic',
    },
    videosContainer: {
        justifyContent: 'center',
        padding: 20,
        marginTop: 5,
        margin: 25
    },
    vidHeader: {
        fontSize: 20,
        fontWeight: 'bold'
    },
})

export default home_style;