//STYLE FOR SEARCH SCREEN
import { StyleSheet } from "react-native";

const search_style = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
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
        display: 'flex',
        flexDirection: 'row',
        width:'100%',
        justifyContent: 'space-between'
    },

    searchInput: {
        backgroundColor: '#d9d9d9',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 10,
        marginBottom: 15,
        width: '73%',
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
        width: '25%'
    },

    searchButtonText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',

    },

    searchResultsContainer: {
        // padding: 5,
        // borderWidth: 1,
        // marginBottom: '60%', 
        height: '100%',
    },

    resultHeaderTitleContainer: {
        marginVertical: 10,
        
    },

    resultHeaderText: {
        fontFamily: 'ProductSans-Regular',
    },

    resultBlockContainer:{
        padding: 20,
        marginVertical: 5,
        marginHorizontal: 5,
        borderRadius: 10,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    
        elevation: 5,
    },

    resultBlockHeading: {
        fontFamily: 'ProductSans-Bold',
        marginVertical: 5
    },

    resultModalContainer: {
        backgroundColor: '#142E65',
        borderRadius: 10,
        padding: 15
    },

    modalHeader: {
        marginBottom: 10,
        padding: 10,
        borderRadius: 6,
        backgroundColor: '#112755',
    },

    modalHeaderText: {
        color: 'white',
        fontSize: 19,
        fontFamily: 'ProductSans-Bold',
    },
    
    modalContent: {
        padding: 10,
        marginBottom: 20
    },
    
    modalContentText: {
        fontFamily: 'ProductSans-Regular',
        color: 'white',
        fontSize: 16
    },

    modalActionContainer: {

    },

    actionButton: {
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 50,
        margin: 5
    },

    actionText: {
        fontFamily: 'ProductSans-Regular',
    },

    buttonImg: {
        width: 25,
        height: 25,
        marginRight: 10,
    },




})

module.exports = search_style;