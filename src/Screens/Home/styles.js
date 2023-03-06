import { StyleSheet } from "react-native";
import { moderateScale, moderateVerticalScale, verticalScale } from "react-native-size-matters";
export const styles = StyleSheet.create({
  address: { backgroundColor: "#94DFD9",
padding:moderateScale(2),
paddingLeft:moderateScale(10),
flexDirection:'row',
alignItems:'center',
fontSize:"10",
},
banner:{
width:'100%',
},
topcategories:{
  borderTopWidth:6,
  borderTopColor:'lightgrey',
  borderBottomWidth:6,
  borderBottomColor:'lightgrey'
},
dealsofday:{
  fontSize:moderateVerticalScale(19),
  backgroundColor:'white',
  padding:moderateScale(10)
},
maincon:{
  margin: 5,
},
lang:{
  flexDirection:'row',
  marginLeft:'auto',
  gap:10,
}
});
