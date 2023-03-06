import { StyleSheet } from "react-native";
import { moderateScale,scale, verticalScale } from "react-native-size-matters";
export const styles = StyleSheet.create({

  header:{
    paddingTop:moderateScale(40),
    flexDirection:"row",
    padding:moderateScale(8),
    backgroundColor:"#94DFD8",
    alignItems:'center'
},
headerbox:{
    borderWidth:1,
    borderRadius:scale(8),
    borderColor:'black',
    backgroundColor:'white',
    flex:1,
    flexDirection:"row",
    padding:moderateScale(6),
    alignItems:'center'
},
search:{
    marginLeft:scale(10),
    width:moderateScale(250)
},
imgscan:{
   marginLeft:"auto"
},
logo:{
    width:moderateScale(100),
    resizeMode:"contain",
    height:moderateScale(50)
   
},
profileheader:{
    flexDirection:"row",
    backgroundColor:"#a1e3d5",
    alignItems:'center',
    height:moderateScale(75),
    paddingTop:moderateScale(30),
    paddingHorizontal:moderateScale(10),
},
notification:{
    height:moderateScale(25),
    marginLeft:moderateScale(12)   
},
icons:{
    flexDirection:'row',
    marginLeft:'auto',
}
});


