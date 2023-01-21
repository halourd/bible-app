
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

    subContainer2: {
        flex: 2
    },

    syncLabel: {
        fontSize:19,
        marginVertical: 10
    },

    syncButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#203239',
        paddingVertical: 10,
        borderRadius: 10
    },

    codeInputBox: {
        padding: 10,
        backgroundColor: '#ccc',
        marginBottom: 10,
        borderRadius: 10
    },

    codeInputBox2: {
        padding: 10,
        backgroundColor: '#ccc',
        marginBottom: 10,
        borderRadius: 10,
        justifyContent: 'center'
    },

    buttonImg: {
        width: 40,
        height: 40
    },
    buttonTextContainer: {
        justifyContent: 'center'
    },
    buttonText: {
        color: '#fff'
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

    }

})

export default sync_style