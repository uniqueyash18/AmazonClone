import React from "react";
import { View } from "react-native";
import Carousel from "react-native-snap-carousel";
import CarouselCardItem, { SLIDER_WIDTH } from "./CarouselCardItem";
import data from "./data";

const CarouselCards = ({imgdata}) => {
  const isCarousel = React.useRef(null);

  return (
    <View>
      <Carousel
        layout="default"
        ref={isCarousel}
        data={imgdata}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={SLIDER_WIDTH-24}
        autoplay={true}
        loop={true}
        autoplayDelay={0}
        pagingEnabled
      />
    </View>
  );
};
export default CarouselCards;
