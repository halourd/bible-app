// STYLING FOR HOMPAGE VIEW

import {StyleSheet} from "react-native";

const home_style = StyleSheet.create ({
    container: {
        position: 'relative',
        zIndex: -1,
        flex: 1
    },
    homeBg: {
        flex: 1
    },
    homeNavbar: {
        marginTop: 50,
        flexDirection: "row"
    },
    menu: {
        width: 25,
        height: 30,
        marginBottom: 2,
        marginRight: 20,
        marginLeft: 20 
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    },
    votdContainer: {
        justifyContent: 'center',
        padding: 30,
        marginTop: 10,
        margin: 25
    },
    verse: {
        fontWeight: 'bold',
        fontSize: 20
    },
    verseTitle: {
        marginTop: 30,
        fontStyle: 'italic'
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