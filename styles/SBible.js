// STYLING FOR BIBLE VIEW

import { StyleSheet } from "react-native";

const bible_style = StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1,
    },

    use_fontFamily: {
        fontFamily: 'ProductSans-Regular',
    },

    Selection: {
        flexDirection: 'row',
        paddingHorizontal: 35,
        marginTop: 40,
        paddingVertical: 5
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

    selectionButtonText:{
        fontSize: 18,
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
        // paddingVertical: 15,
        // borderWidth: 1,
        // borderColor: 'red',
    },
    
    verseNumber: {
        // borderWidth: 1,
        textAlign: 'center',
        width: 45,
        // paddingHorizontal: 20,
        justifyContent: 'center',
    },
    
    verseTextContainer : {
        // borderWidth: 1,
        paddingVertical: 15,
        paddingRight: 15,
        flexShrink: 1,
        
    
    },

    verse_numberText: {
        fontSize: 16,
        textAlign: 'center',
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
        marginTop: '30%',
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
        marginVertical: 10,
        paddingHorizontal: 20,
        textAlign: 'center',
        fontFamily : 'ProductSans-Bold',
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
    },

    searchButtonContainer: {
        // borderWidth: 1,
        // borderColor: 'red',
        position: 'absolute',
        bottom: 140,
        right: 45,
        backgroundColor: '#eeedde',

        borderRadius: 10,

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

    searchButton: {
        flexDirection: 'row',
        // borderWidth: 1,
        // borderColor: 'red',
        paddingHorizontal: 20,
        paddingVertical: 13,
        justifyContent: 'center',
        
    },

    searchButtonText: {
        fontSize: 16,
        textAlignVertical: 'center',
    },  

    searchIcon: {
        width: 30,
        height: 30,
        marginRight: 12,
    },


    bookList: {
        padding: 20,
        borderRadius: 10
    }
    

})

export default bible_style;