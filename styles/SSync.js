
import { StyleSheet } from "react-native";

const sync_style = StyleSheet.create({
    mainContainer: {
        // borderWidth: 1,
        flex: 1
    },

    headerContainer: {
        marginTop: 50,
        paddingVertical: 20,
        // borderWidth: 1,

        flexDirection: 'row'
    },

    backButtonContainer: {
        justifyContent: 'center',
        // borderWidth: 1,
        paddingHorizontal: 20
    },

    backButtonImage: {
        width: 30,
        height: 30
    },  

    syncHeader: {
        
    },

    titleName: {  
        fontSize: 24,
        fontFamily: "ProductSans-Bold",
    },

    titleContainer: {
        // paddingHorizontal: 30,
    },

    container1: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginVertical: 30
    },
    
    subContainer1: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
        
    },

    subContainer1Image: {
        width: 80,
        height: 80,
        resizeMode: 'contain'
    },

    subContainer2: {
        flex: 2,
        
    },

    subContainer2Image: {
        width: 80,
        height: 80,
        resizeMode: 'contain'
    },

    syncLabel: {
        fontSize:19,
        marginVertical: 10,
        fontFamily: 'ProductSans-Regular'
    },

    syncButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#203239',
        paddingVertical: 15,
        borderRadius: 10
    },

    codeInputBox: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        backgroundColor: '#ccc',
        marginBottom: 10,
        borderRadius: 10,
        textAlign: 'center',
        fontFamily: 'ProductSans-Regular',
        fontSize: 18

    },

    codeInputBox2: {
        paddingHorizontal: 18,
        paddingVertical: 18,
        backgroundColor: '#ccc',
        marginBottom: 10,
        borderRadius: 10,
        textAlign: 'center',
    },

    codeText: {
        textAlign: 'center',
        fontFamily: 'ProductSans-Regular',
        fontSize: 18
    },  

    buttonImg: {
        width: 25,
        height: 25,
        marginRight: 10,
    },
    buttonTextContainer: {
        justifyContent: 'center'
        
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
        fontFamily: 'ProductSans-Regular'
    },
    buttonTextContainerHome: {
        flexDirection: 'column-reverse',
        justifyContent: 'center',

    },
    buttonTextContainerBible: {
        flexDirection: 'column-reverse'

    },
    buttonTextContainerNotes: {
        flexDirection: 'column-reverse'

    },

    /*  
        Style for disabling button 
        while finding sync 
    */



})

export default sync_style