import { StyleSheet,StatusBar  } from 'react-native';
const styles = StyleSheet.create({
      
  container: {
    flex: 1,
    paddingTop: 22,
    marginTop: StatusBar.currentHeight || 0,

   },
   item: {
     padding: 10,
     fontSize: 18,
     height: 44,
   },
   input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  item: {
    backgroundColor: 'grey',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  });
  
export default styles