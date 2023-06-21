import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    
    titleEditorContainer:{
        marginHorizontal:20,
        borderRadius: 10,
        backgroundColor: '#e8e8e8',
    },

    titleEditor: {
        paddingHorizontal: 20,
        paddingVertical: 12,
        fontSize:21,
        fontFamily: 'ProductSans-Bold',
        color: 'black'
    },
    
    noteEditingFieldContainer: {
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
        lineHeight: 24,
        color: 'black'
        
    }
    
})

export default styles;