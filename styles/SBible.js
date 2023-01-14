// STYLING FOR BIBLE VIEW

import { StyleSheet } from "react-native";

const bible_style = StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1,
    },
    Selection: {
        flexDirection: 'row',
        paddingHorizontal: 35,
        // borderWidth: 1,
        // borderColor: 'green',
    },
    SelectionButtons: {
        flex:1,
        alignItems: 'center',
        backgroundColor: '#d9d9d9',
        padding: 18,
        marginVertical: 8,
        marginHorizontal: 6,
        borderRadius: 10,
        shadowColor: "#000",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        
        elevation: 3,     
    },
    navBar: {
        zIndex: 1,
    },

    // Verse View

    VerseViewContainer: {
        flexDirection: 'row',
        // borderWidth: 1,
        // borderColor: 'red',
        // paddingVertical: 15,
        // borderWidth: 1,
        // borderColor: 'red',
    },
    
    verseNumber: {
        // borderWidth: 1,
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    
    verseText : {
        // borderWidth: 1,
        paddingVertical: 15,
        paddingRight: 15,
        flexShrink: 1,
    
    },

    verse_text: {
        fontSize: 16,
    }
    

})

export default bible_style;