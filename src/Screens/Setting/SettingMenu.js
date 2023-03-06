import { View ,Text,FlatList} from "react-native"
import { Flatlist } from "../../Components/Flatlist"
import Header from "../../Components/Header"
import ImagePath from "../../Constants/ImagePath"
import CarouselCards from "../../Components/CarouselCards"
import { data2 } from "../../Components/data"
export const SettingMenu = ()=>{
    newarr=[
        { img: ImagePath.Logistic, itemname: "Prime" },
        { img: ImagePath.Grocery, itemname: "Fresh" },
        { img: ImagePath.Fashion, itemname: "Fashion" },
        { img: ImagePath.Travel, itemname: "Prime" },
        { img: ImagePath.MiniTv, itemname: "Prime" },
        { img: ImagePath.MiniTv, itemname: "Prime" },
        { img: ImagePath.MiniTv, itemname: "Prime" },
      ]
return(
    <View>
    <Header/>
        <Text>Setting page</Text>
        <Flatlist data={imgarr}/>
        <CarouselCards imgdata={data2} />
    </View>
)
}