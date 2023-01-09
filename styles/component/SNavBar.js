import { StyleSheet } from "react-native";

const SNavBar = StyleSheet.create({
    mainContainer: {
        backgroundColor: "#203239",
        flex: 0,
        flexDirection: 'row',
        marginHorizontal: 30,
        borderRadius: 10,
        position: 'relative',
        paddingHorizontal: 40,

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
    buttonContainer: {
       padding: 20,
       width: '33.3%',
       alignItems: 'center'

    },
    iconSvg: {
        width: 30,
        height: 30,
        marginBottom: 5
    },
    label: {
        color: "#eeedde",
    }
})

export default SNavBar;