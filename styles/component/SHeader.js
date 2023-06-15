import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 50,
        paddingVertical: 20,
        // borderWidth: 1,
        flexDirection: 'row',
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
     
})

export default styles;