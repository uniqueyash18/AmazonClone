import { TouchableOpacity ,Text, StyleSheet} from "react-native";
import { moderateScale, scale } from "react-native-size-matters";
export const Button=({title})=>{
    const styles=StyleSheet.create({
        button:{
            backgroundColor:'rgba(60,60,60,0.03)',
            padding:moderateScale(9),
            // width:scale(120),
            marginHorizontal:moderateScale(10),
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            borderRadius:20,
            margin:moderateScale(4),
            borderWidth:1,
            borderColor:'#a9b7b8',
        },
        bttext:{
            fontSize:16,
            fontWeight:"normal"
        }
    })
return(
    <TouchableOpacity style={styles.button}>
        <Text style={styles.bttext}>{title}</Text>
    </TouchableOpacity>
)

}