import { TouchableOpacity } from "react-native";
import { Text, View, Image, ScrollView } from "react-native";
import { moderateScale } from "react-native-size-matters";
import CarouselCards from "../../Components/CarouselCards";
import { data, data2 } from "../../Components/data";
import { Flatlist } from "../../Components/Flatlist";
import Header from "../../Components/Header";
import ImagePath from "../../Constants/ImagePath";
import { eng, hindi, langstring } from "../../Constants/Strings";
import { styles } from "./styles";


export const Home = () => {
  imgarr = [
    { img: ImagePath.Logistic, itemname: langstring.hindi.Prime },
    { img: ImagePath.Grocery, itemname: langstring.hindi.Fresh },
    { img: ImagePath.Fashion, itemname: langstring.hindi.Fashion },
    { img: ImagePath.Travel, itemname: langstring.hindi.Prime },
    { img: ImagePath.MiniTv, itemname: langstring.hindi.Shoes },
    { img: ImagePath.MiniTv, itemname: langstring.hindi.Mobile },
    { img: ImagePath.MiniTv, itemname: langstring.hindi.Bikes },
  ];
  return (
    <ScrollView style={styles.maincon}>
      <Header />
      <View style={styles.address}>
        <Text>
          <Image source={ImagePath.icMap} />
          {langstring.hindi.Address}
        </Text>
        <View style={styles.lang}>
          <TouchableOpacity>
            <Text>English</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Hindi</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.topcategories}>
        <Flatlist
          data={imgarr}
          flatwrapstyle={{
            width: moderateScale(60),
            height: moderateScale(90),
          }}
          flatimgstyle={{ width: moderateScale(55), height: moderateScale(60) }}
        />
      </View>
      <CarouselCards imgdata={data} />
      <Flatlist
        data={imgarr}
        flatwrapstyle={{
          height: moderateScale(130),
          borderColor: "black",
          borderWidth: 0.5,
          borderRadius: 8,
          padding: moderateScale(1),
        }}
        flatimgstyle={{ borderWidth: 0 }}
      />
      <CarouselCards imgdata={data2} />
      <View>
        <Text style={styles.dealsofday}>{langstring.hindi.DealsOfTheDay}</Text>
      </View>
      <CarouselCards imgdata={data2} />
    </ScrollView>
  );
};
