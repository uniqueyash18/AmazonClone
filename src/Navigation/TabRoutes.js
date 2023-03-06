import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from "../Screens/Home/Home";
import { Profile } from "../Screens/Profile/Profile";
import { ShoppingCart } from "../Screens/ShoppingCart/ShoppingCart";
import ImagePath from "../Constants/ImagePath";
import { SettingMenu } from "../Screens/Setting/SettingMenu";
import { langstring } from "../Constants/Strings";
// import { langstring} from "../Constants/Strings";
const Tab = createBottomTabNavigator();
export const TabRoutes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen options={ {tabBarActiveTintColor:'#94DFD8',tabBarIcon:({focused})=>{return(<Image style={{tintColor:focused ? "#94DFD8":"black"}} source={ImagePath.icHome}/>)}}} name={langstring.hindi.Home} component={Home} />
        <Tab.Screen options={{tabBarActiveTintColor:'#94DFD8',tabBarIcon:({focused})=>{return(<Image style={{tintColor:focused ? "#94DFD8":"black"}} source={ImagePath.icProfile}/>)}}} name={langstring.hindi.Profile} component={Profile} />
        <Tab.Screen options={{tabBarActiveTintColor:'#94DFD8',tabBarIcon:({focused})=>{return(<Image style={{tintColor:focused ? "#94DFD8":"black"}} source={ImagePath.icCart}/>)}}} name={langstring.hindi.ShoppingCart} component={ShoppingCart} />
        <Tab.Screen options={{tabBarActiveTintColor:'#94DFD8',tabBarIcon:({focused})=>{return(<Image style={{tintColor:focused ? "#94DFD8":"black"}} source={ImagePath.icSetting}/>)}}} name={langstring.hindi.Setting} component={SettingMenu} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
