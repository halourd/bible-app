//STYLE FOR SEARCH SCREEN
import { StyleSheet } from "react-native";

const search_style = StyleSheet.create({
    container: {
        // marginTop: 50,
        paddingHorizontal: 20
    },

    use_fontFamilyRegular: {
        fontFamily: 'ProductSans-Regular',
    },
    use_fontFamilyBold: {
        fontFamily: 'ProductSans-Bold',
    },

    searchHeaderText: {
        fontSize: 30,
        paddingHorizontal: 10
    },  

    headerText: {
        fontSize: 16,

    },

    searchHeaderContainer: {
        padding: 5,
        flexDirection: 'row',
    },

    searchBodyContainer: {
    },  

    selectionContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },  

    searchSelectionHeader: {

    },

    searchSelection: {
        width: '50%',
        marginVertical: 10,
    },

    searchSelectionHeaderTitle: {
        fontSize: 16,
        paddingHorizontal: 15
    },

    selectionButton: {
        backgroundColor: '#d9d9d9',
        paddingHorizontal: 40,
        paddingVertical: 15,
        marginVertical: 5,
        marginHorizontal: 5,
        borderRadius: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row-reverse',
    },

    searchInputContainer: {

    },

    searchInput: {
        backgroundColor: '#d9d9d9',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 10,
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },

    searchInputText: {
        width: '100%',
        paddingHorizontal: 15,
        fontSize: 18  
    },

    searchIcon:{
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },

    dropdownIcon: {
        width: 15,
        height: 15,
        resizeMode: 'contain',
    },

    searchButton: {
        backgroundColor: '#142E65',
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 10,
        marginBottom: 15,
    },

    searchButtonText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',

    },

    searchResultsContainer: {
        padding: 5,
        borderWidth: 1,
        // margin: 65, 
        height: '100%',
        
      

    }




})

module.exports = search_style;