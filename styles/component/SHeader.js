import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 25,
        paddingVertical: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center'
    },

    actionButtonContainer: {
        flexDirection: 'row',
        paddingRight: 20
    },

    backButtonContainer: {
        justifyContent: 'center',
        // borderWidth: 1,
        paddingHorizontal: 20
    },

    titleName: {  
        fontSize: 24,
        fontFamily: "ProductSans-Bold",
    },
    
    titleContainer: {
        // paddingHorizontal: 30,
    },
    
    backButtonImage: {
        width: 30,
        height: 30
    },
    
    saveButtonContainer: {
        backgroundColor: '#27A157',
        borderRadius: 10,
        position: 'relative',
        right: 0,
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginRight: 10,

        shadowColor: "grey",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    
        elevation: 5,
    },
    saveButtonContainerDisabled: {
        backgroundColor: '#8BCCA5',
        borderRadius: 10,
        position: 'relative',
        right: 0,
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        // marginRight: 10,

        shadowColor: "grey",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    
        elevation: 5,
    },
    
    saveButtonText: {
        fontFamily: "ProductSans-Regular",
        color: 'white'
    }
     
})

export default styles;