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
    { img: ImagePath.Logistic, itemname: langstring.hindiPrime },
    { img: ImagePath.Grocery, itemname: langstring.hindi.Fresh },
    { img: ImagePath.Fashion, itemname: langstring.hindi.Fashion },
    { img: ImagePath.Travel, itemname: langstring.hindi.Prime },
    { img: ImagePath.MiniTv, itemname: langstring.hindi.Shoes },
    { img: ImagePath.MiniTv, itemname: langstring.hindi.Mobile },
    { img: ImagePath.MiniTv, itemname: langstring.hindi.Bikes },
  ]
  return (
    <View style={{flex:1}}>
      <ProfileHeader />
      <ScrollView>
        <View style={styles.user}>
          <Text style={styles.uname1}>{langstring.hindi.Hello}</Text>
          <Text style={styles.uname}>{langstring.hindi.Yash}</Text>
          <Image style={styles.userimg} source={ImagePath.icProfile}></Image>
        </View>
        <View style={styles.buttons}>
          <Button title={langstring.hindi.YourOrder} />
          <Button title={langstring.hindi.BuyAgain} />
        </View>
        <View style={styles.buttons}>
          <Button title={langstring.hindi.YourAccount} />
          <Button title={langstring.hindi.YourWishlist} />
        </View>
        <View style={styles.yourOrder}>
          <Text style={styles.ordertext}>{langstring.hindi.YourOrder}</Text>
        <TouchableOpacity  style={styles.seeAll}>
          <Text style={styles.seeAll}>{langstring.hindi.SeeAll}</Text>
          </TouchableOpacity>
        </View>
        <Flatlist data={newarr} />
        <View style={styles.yourOrder}>
          <Text style={styles.ordertext}>{langstring.hindi.KeepShopping}</Text>
        <TouchableOpacity style={styles.seeAll} >
          <Text style={styles.seeAll}>{langstring.hindi.Edit}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.browsing}>
          <Text style={styles.browsing}>{langstring.hindi.Browsing}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.keepshopping}>
          <Items nameofitem={langstring.hindi.ElectricHandel} views={langstring.hindi.Views} imagesource={{uri:ImagePath.Handblend}} />
          <Items nameofitem={langstring.hindi.IdolsFigures} views={langstring.hindi.Views} imagesource={{uri:ImagePath.IdolsFigures}}/>
          <Items nameofitem={langstring.hindi.Caramplifiers} views={langstring.hindi.Views} imagesource={{uri:ImagePath.CarAmplifiers}}/>
        </View>
        <View style={styles.keepshopping}>
          <Items nameofitem={langstring.hindi.Mobile} views={langstring.hindi.Views} imagesource={{uri:ImagePath.Handblend}}/>
          <Items nameofitem={langstring.hindi.Helmets} views={langstring.hindi.Views} imagesource={{uri:ImagePath.Handblend}}/>
          <Items nameofitem={langstring.hindi.Appliances} views={langstring.hindi.Views} imagesource={{uri:ImagePath.Handblend}}/>
        </View>
        <View style={styles.keepshopping}>
          <Items nameofitem={langstring.hindi.Mobile} views={langstring.hindi.Views} imagesource={{uri:ImagePath.Handblend}}/>
          <Items nameofitem={langstring.hindi.Helmets} views={langstring.hindi.Views} imagesource={{uri:ImagePath.Handblend}}/>
          <Items nameofitem={langstring.hindi.Appliances} views={langstring.hindi.Views} imagesource={{uri:ImagePath.Handblend}}/>
        </View>
      </ScrollView>
    </View>
  );
};
