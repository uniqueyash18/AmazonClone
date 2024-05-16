import { TouchableOpacity } from "react-native";
import { Text, View, Image, ScrollView } from "react-native";
import { moderateScale } from "react-native-size-matters";
import CarouselCards from "../../Components/CarouselCards";
import { data, data2 } from "../../Components/data";
import { Flatlist } from "../../Components/Flatlist";
import Header from "../../Components/Header";
import ImagePath from "../../Constants/ImagePath";
import { langstring } from "../../Constants/Strings";
import { styles } from "./styles";


export const Home = () => {
  imgarr = [
    { img: ImagePath.Logistic, itemname: langstring.eng.Prime },
    { img: ImagePath.Grocery, itemname: langstring.eng.Fresh },
    { img: ImagePath.Fashion, itemname: langstring.eng.Fashion },
    { img: ImagePath.Travel, itemname: langstring.eng.Prime },
    { img: ImagePath.MiniTv, itemname: langstring.eng.Shoes },
    { img: ImagePath.MiniTv, itemname: langstring.eng.Mobile },
    { img: ImagePath.MiniTv, itemname: langstring.eng.Bikes },
  ];
  return (
    <ScrollView style={styles.maincon}>
      <Header />
      <View style={styles.address}>
        <Text>
          <Image source={ImagePath.icMap} />
          {langstring.eng.Address}
        </Text>
        <View style={styles.lang}>
          <TouchableOpacity>
            <Text>English</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>eng</Text>
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
        <Text style={styles.dealsofday}>{langstring.eng.DealsOfTheDay}</Text>
      </View>
      <CarouselCards imgdata={data2} />
    </ScrollView>
  );
};
