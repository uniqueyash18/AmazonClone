import { StyleSheet } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

export const styles = StyleSheet.create({
  user: {
    backgroundColor: "#a1e3d5",
    flexDirection: "row",
    padding: moderateScale(8),
  },
  uname: {
    fontSize: 24,
    fontWeight: "bold",
    margin: moderateScale(6),
    marginLeft: moderateScale(0),
  },
  userimg: {
    marginRight: moderateScale(8),
    marginLeft: "auto",
    borderWidth: 2,
    borderColor: "white",
    backgroundColor: "#a9b7b8",
    borderRadius: 100,
    height: scale(40),
    width: scale(40),
    tintColor: "white",
  },
  uname1: {
    fontSize: 22,
    margin: moderateScale(6),
    marginRight: moderateScale(0),
  },
  buttons: {
    flexDirection: "row",
  },
  yourOrder: {
    flexDirection: "row",
    marginHorizontal: moderateScale(8),
    marginTop: moderateScale(20),
    alignItems: "center",
  },
  ordertext: {
    fontWeight: "bold",
    fontSize: verticalScale(16),
  },
  seeAll: {
    color: "#2c818d",
    fontSize: verticalScale(14),
    marginLeft: "auto",
  },
  browsing: {
    color: "#2c818d",
    fontSize: verticalScale(14),
    marginLeft: moderateScale(14),
  },
  itemImg: {
    width: moderateScale(150),
    height: moderateScale(120),
    borderRadius: 10,
    borderWidth: moderateScale(1),
    borderColor: "#a9b7b8",
    margin: moderateScale(3),
  },
  keepshopping:{ flexDirection: "row", justifyContent: "center" }
});
