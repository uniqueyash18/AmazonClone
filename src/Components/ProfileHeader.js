import { View, Text, TextInput, Image, StyleSheet } from "react-native";
import { moderateScale, scale } from "react-native-size-matters";
import ImagePath from "../Constants/ImagePath";
import { styles } from "./allStyles";
export default () => {
  return (
    <View style={styles.profileheader}>
      <View>
        <Image style={styles.logo} source={ImagePath.Logo} />
      </View>
      <View style={styles.icons}>
        <Image style={styles.notification} source={ImagePath.Notification}/>
        <Image style={styles.notification} source={ImagePath.icSearch}/>
      </View>
    </View>
  );
};
