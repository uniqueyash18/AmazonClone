import { Button } from "react-native"
import { View ,Text,Image} from "react-native"
import { moderateScale } from "react-native-size-matters"
import Header from "../../Components/Header"

export const ShoppingCart=({navigation})=>{
return(
    <View style={{flex:1,backgroundColor:'#fafbf6'}}>
    <Header/>
       <Image source={require("../../../assets/dogo.png")} style={{width:moderateScale(380),height:moderateScale(550)}}></Image>
       {/* <Button onPress={ navigation.navigate('Home')} title="Go to Home Page" color={'black'}/> */}
    </View>
)
}