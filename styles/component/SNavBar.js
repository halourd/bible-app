import { StyleSheet } from "react-native";

const SNavBar = StyleSheet.create({
    mainContainer: {
        backgroundColor: "#162F65",
        flex: 0,
        flexDirection: 'row',
        // marginHorizontal: 30,
        // paddingHorizontal: 20,
        position: 'absolute',
        shadowColor: "#203239",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity:  0.24,
        shadowRadius: 13.84,
        elevation: 17,
        width: '100%',
        bottom: 0,
        alignSelf: 'center',
    },

    buttonContainer: {
       paddingHorizontal: 16,
       paddingVertical: 12,
       width: '33.3%',
       alignItems: 'center',
       borderRadius: 10,
    //    borderColor: 'red',
    //    borderWidth: 1,


    },
    iconSvg: {
        width: 28,
        height: 28,
        marginBottom: 2,
    },
    label: {
        color: "#eeedde",
        fontSize: 12,
    },

    use_fontFamily: {
        fontFamily: 'ProductSans-Regular',
    },

})

export default SNavBar;