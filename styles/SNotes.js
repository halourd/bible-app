//STYLE FOR NOTES SCREEN
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  use_fontFamily: {
    fontFamily: "ProductSans-Regular",
  },

  headerContainer: {
    marginTop: 50,
    paddingVertical:20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 30,
  },

  optionImage: {
    width: 30,
    height: 30,
    marginHorizontal: 10
  },

  optionTitle: {
    fontFamily: 'ProductSans-Regular'
  },

  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  titleName: {  
    fontSize: 24,
    fontFamily: "ProductSans-Bold",
  },

  titleContainer: {
  },

  notes: {
    marginTop: 20,
  },

  headerNotes: {
    padding: 20,
    marginTop: 15,
    marginHorizontal: 30,

    borderRadius: 10,

    backgroundColor: "#EEEDDE",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  notesContainer: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  notesTitle: {
    fontFamily: "ProductSans-Bold",
    fontSize: 19,
  },

  noteverses: {
    color: "gray",
    fontFamily: "ProductSans-Regular",
    fontSize: 16,
  },
});
export default styles;
