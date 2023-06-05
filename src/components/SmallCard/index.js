import { Image, View, Text, Dimensions, StyleSheet } from "react-native";
import mainColors from "../../utils/colors";

const { width } = Dimensions.get("screen");

const SmallCard = ({ locationName }) => {
  return (
    <>
      <View style={styles.smallCardContainer}>
        <Image
          source={require("../../assets/hotel4.jpg")}
          style={styles.Image}
        />
        <Text style={styles.text}>{locationName}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  smallCardContainer: {
    backgroundColor: mainColors.white,
    elevation: 10,
    width: width / 3,
    marginLeft: 20,
    marginTop: 10,
  },
  Image: {
    height: 120,
    width: "100%",
    borderRadius: 10,
    resizeMode: "contain",
  },
  text: {
    position: "absolute",
    color: mainColors.white,
    bottom: 0,
    fontWeight: "bold",
    left: 0,
    right: 0,
    letterSpacing: 4,
    textAlign: "center",
  },
});
export default SmallCard;
