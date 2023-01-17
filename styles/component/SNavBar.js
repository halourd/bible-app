import { StyleSheet } from "react-native";

const SNavBar = StyleSheet.create({
    mainContainer: {
        backgroundColor: "#203239",
        flex: 0,
        flexDirection: 'row',
        // marginHorizontal: 30,
        borderRadius: 10,
        paddingHorizontal: 30,
        position: 'absolute',
        shadowColor: "#203239",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity:  0.24,
        shadowRadius: 13.84,
        elevation: 17,
        width: '80%',
        bottom: 40,
        alignSelf: 'center',
    },
    buttonContainer: {
       padding: 17,
       width: '33.3%',
       alignItems: 'center',
       borderRadius: 10,


    },
    iconSvg: {
        width: 34,
        height: 34,
        marginBottom: 2,
    },
    label: {
        color: "#eeedde",
    },

    use_fontFamily: {
        fontFamily: 'ProductSans-Regular',
    },

})

export default SNavBar;