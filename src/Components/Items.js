import { StyleSheet } from "react-native";
import { Text, TouchableOpacity } from "react-native";
import { Image, View } from "react-native";
import { moderateScale } from "react-native-size-matters";

export const Items = ({ nameofitem, views, imagesource,flatwrapstyle,imgstyle }) => {
  const styles = StyleSheet.create({
    img: {
      width: moderateScale(110),
      height: moderateScale(100),
      borderRadius: 10,
      borderWidth: moderateScale(1),
      borderColor: "#a9b7b8",
      borderWidth: 1,
      borderColor: "#a9b7b8",
    },
    itemwrap: {
      justifyContent: "center",
      alignItems: "flex-start",
      margin: moderateScale(5),
      width: moderateScale(110),
    },

  });
  return (
      <TouchableOpacity style={{...styles.itemwrap,...flatwrapstyle}}>
        <Image resizeMode="contain" source={imagesource} style={{...styles.img,...imgstyle}} />
        {!!nameofitem?  (
          <View>
            <Text >{nameofitem}</Text>
            {!!views? ( <Text>{views }</Text>):null}
          </View>
        ) : null}
      </TouchableOpacity>
  );
};
