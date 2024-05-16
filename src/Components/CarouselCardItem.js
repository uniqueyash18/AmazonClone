import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'

export const SLIDER_WIDTH = Dimensions.get('window').width

const CarouselCardItem = ({ item}) => {
  return (
    <View style={styles.container}>
      <Image
      resizeMode='stretch'
        source={{ uri: item.imgUrl }}
        style={styles.image}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: 400,
  },
  image: {
    width: moderateScale(SLIDER_WIDTH-55),
    height: moderateVerticalScale(150),
    borderRadius:moderateScale(12),
  },
})

export default CarouselCardItem