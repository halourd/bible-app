// STYLING FOR HOMPAGE VIEW

import {StyleSheet} from "react-native";

const home_style = StyleSheet.create ({
    container: {
        postion: 'relative',
        zIndex: -1
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
        borderWidth: 1,
        margin: 25
    },
    verse: {
        fontWeight: 'bold',
        fontSize: 20
    },
    verseTitle: {
        marginTop: 30,
        fontStyle: 'italic'
    }
})

export default home_style;