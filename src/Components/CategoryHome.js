import { Image, StyleSheet, Text } from "react-native"
import { View } from "react-native"
import { moderateScale, verticalScale } from "react-native-size-matters"
import ImagePath from "../Constants/ImagePath"

export const CategoryHome=({category,imagesrc})=>{
    const styles=StyleSheet.create({
container:{
    flex:1,
    width:moderateScale(60),
    height:moderateScale(70),
    alignItems:'center',
    justifyContent:'center',
    padding:moderateScale(2),
    margin:moderateScale(6)
},
img:{
    flex:1,
    width:moderateScale(50)
},
txt:{
    height:moderateScale(20),
    fontSize:verticalScale(10)
}
    })
    return(
        <View style={styles.container}>
        <Image style={styles.img} source={imagesrc}/>
        <Text style={styles.txt}>{category}</Text>
        </View>
    )
}