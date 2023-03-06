import { FlatList } from "react-native";
import { Items } from "./Items";
export const Flatlist = ({flatwrapstyle,flatimgstyle,data}) => {
  return (
    <FlatList
    horizontal
    showsHorizontalScrollIndicator={false}
      data={data}
      renderItem={({ item }) => {
        return <Items imagesource={item.img} nameofitem={item.itemname} flatwrapstyle={flatwrapstyle} imgstyle={flatimgstyle}/>;
      }}
    />
  );
};
