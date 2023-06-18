import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    
    titleEditorContainer:{
        backgroundColor: '#e8e8e8',
        marginHorizontal:20,
        borderRadius: 10
    },

    titleEditor: {
        paddingHorizontal: 20,
        paddingVertical: 12,
        fontSize:21,
        fontFamily: 'ProductSans-Regular'
    },
    
    noteEditingFieldContainer: {
        // backgroundColor: '#e8e8e8',
        marginTop: 10,
        marginHorizontal:20,
        borderRadius: 10,
        height: '100%',
    },
    
    noteEditingField: {
        fontFamily: 'ProductSans-Regular',
        paddingHorizontal: 20,
        paddingVertical: 12,
        fontSize:16,
        height: '100%',
        lineHeight: 1.5
        
    }
    
})

export default styles;