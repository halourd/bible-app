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

    scrollView: {
        marginBottom: '60%'
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
    },


    //Modal Container
    modalContainer: {   

    },  

    modalView:  {
        // borderWidth: 1,
        // borderColor: 'red',
        borderRadius: 10,
        height: '70%',

        padding: 20,
        marginTop: 70,
        marginHorizontal: 40,
        backgroundColor: '#eeedde',

        shadowColor: "#000",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        
        elevation: 11, 
        
    },

    modalHeaderText: {
        fontSize: 21,
        fontWeight: 'bold',
        marginVertical: 10
    },

    chapterListContainer: {
        // borderWidth: 1,
        // borderColor: 'red',
    },

    chapterList: {
        padding: 20,
        borderRadius: 10
    },
    

    chapterListButton: {
    }
    

})

export default bible_style;