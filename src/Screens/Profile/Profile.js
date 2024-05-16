import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import ProfileHeader from "../../Components/ProfileHeader";
import ImagePath from "../../Constants/ImagePath";
import { styles } from "./profilestyle";
import { Button } from "../../Components/Button";
import { Items } from "../../Components/Items";
import { Flatlist } from "../../Components/Flatlist";
import { langstring } from "../../Constants/Strings";
export const Profile = () => {
  newarr=[
    { img: ImagePath.Logistic, itemname: langstring.eng.Prime },
    { img: ImagePath.Grocery, itemname: langstring.eng.Fresh },
    { img: ImagePath.Fashion, itemname: langstring.eng.Fashion },
    { img: ImagePath.Travel, itemname: langstring.eng.Prime },
    { img: ImagePath.MiniTv, itemname: langstring.eng.Shoes },
    { img: ImagePath.MiniTv, itemname: langstring.eng.Mobile },
    { img: ImagePath.MiniTv, itemname: langstring.eng.Bikes },
  ]
  return (
    <View style={{flex:1}}>
      <ProfileHeader />
      <ScrollView>
        <View style={styles.user}>
          <Text style={styles.uname1}>{langstring.eng.Hello}</Text>
          <Text style={styles.uname}>{langstring.eng.Yash}</Text>
          <Image style={styles.userimg} source={ImagePath.icProfile}></Image>
        </View>
        <View style={styles.buttons}>
          <Button title={langstring.eng.YourOrder} />
          <Button title={langstring.eng.BuyAgain} />
        </View>
        <View style={styles.buttons}>
          <Button title={langstring.eng.YourAccount} />
          <Button title={langstring.eng.YourWishlist} />
        </View>
        <View style={styles.yourOrder}>
          <Text style={styles.ordertext}>{langstring.eng.YourOrder}</Text>
        <TouchableOpacity  style={styles.seeAll}>
          <Text style={styles.seeAll}>{langstring.eng.SeeAll}</Text>
          </TouchableOpacity>
        </View>
        <Flatlist data={newarr} />
        <View style={styles.yourOrder}>
          <Text style={styles.ordertext}>{langstring.eng.KeepShopping}</Text>
        <TouchableOpacity style={styles.seeAll} >
          <Text style={styles.seeAll}>{langstring.eng.Edit}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.browsing}>
          <Text style={styles.browsing}>{langstring.eng.Browsing}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.keepshopping}>
          <Items nameofitem={langstring.eng.ElectricHandel} views={langstring.eng.Views} imagesource={{uri:ImagePath.Handblend}} />
          <Items nameofitem={langstring.eng.IdolsFigures} views={langstring.eng.Views} imagesource={{uri:ImagePath.IdolsFigures}}/>
          <Items nameofitem={langstring.eng.Caramplifiers} views={langstring.eng.Views} imagesource={{uri:ImagePath.CarAmplifiers}}/>
        </View>
        <View style={styles.keepshopping}>
          <Items nameofitem={langstring.eng.Mobile} views={langstring.eng.Views} imagesource={{uri:ImagePath.Handblend}}/>
          <Items nameofitem={langstring.eng.Helmets} views={langstring.eng.Views} imagesource={{uri:ImagePath.Handblend}}/>
          <Items nameofitem={langstring.eng.Appliances} views={langstring.eng.Views} imagesource={{uri:ImagePath.Handblend}}/>
        </View>
        <View style={styles.keepshopping}>
          <Items nameofitem={langstring.eng.Mobile} views={langstring.eng.Views} imagesource={{uri:ImagePath.Handblend}}/>
          <Items nameofitem={langstring.eng.Helmets} views={langstring.eng.Views} imagesource={{uri:ImagePath.Handblend}}/>
          <Items nameofitem={langstring.eng.Appliances} views={langstring.eng.Views} imagesource={{uri:ImagePath.Handblend}}/>
        </View>
      </ScrollView>
    </View>
  );
};
