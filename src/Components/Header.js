import { View,Text,TextInput,Image } from "react-native";
import { moderateScale, scale } from "react-native-size-matters";
import ImagePath from "../Constants/ImagePath";
import { styles } from "./allStyles";
export default () => {
    return (
        <View style={styles.header}>
        <View style={styles.headerbox}>
        <Image source={ImagePath.icSearch}></Image>
        <TextInput style={styles.search} placeholder="Search Amazon.in"></TextInput>
        <Image style={styles.imgscan} source={ImagePath.icScan}></Image>
        </View>
        <View>
        <Image source={ImagePath.icMic}></Image>
        </View>
        </View>
        )
}