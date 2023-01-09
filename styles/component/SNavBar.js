import { StyleSheet } from "react-native";

const SNavBar = StyleSheet.create({
    mainContainer: {
        backgroundColor: "#203239",
        flex: 0,
        flexDirection: 'row',
        marginHorizontal: 30,
        borderRadius: 10,
        position: 'relative',

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
       padding: 30,
       width: '33.3%',
       alignItems: 'center'

    },
    iconSvg: {

    },
    label: {
        color: "#eeedde",
    }
})

export default SNavBar;