import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  Text,
  Pressable,
} from "react-native";
import { useGetAllHotelsQuery } from "../../redux/reducer/slice-hotel";
import hotels from "../../const/hotels";
import mainColors from "../../utils/colors";
import Icon from "react-native-vector-icons/MaterialIcons";

const { width } = Dimensions.get("screen");

const Card = ({ hotel, navigation }) => {
  console.log("hotels", hotels);
  return (
    <Pressable onPress={() => navigation.navigate("DetailHotel", hotel)}>
      <View style={styles.card}>
        <Image
          source={hotel.image}
          style={{ height: 120, width: "100%", borderRadius: 10 }}
        />
        <Text style={styles.cardName}>{hotel.name}</Text>
        <View style={styles.cardContent}>
          <Text style={styles.cardPrice}>${hotel.price}</Text>
          <Text style={styles.cardNight}>/night</Text>
        </View>
        <View style={styles.cardContentLocation}>
          <Icon name="location-on" size={18} color={mainColors.grey1} />
          <Text style={styles.location}>Bitung, Sulawesi Utara</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 230,
    backgroundColor: mainColors.light1,
    elevation: 10,
    width: width / 2.1,
    marginRight: 20,
    padding: 10,
    marginVertical: 20,
    borderRadius: 10,
  },
  cardName: {
    marginTop: 10,
    fontSize: 12,
    color: mainColors.primary3,
    fontWeight: "bold",
  },
  cardPrice: {
    fontSize: 12,
    color: mainColors.primary2,
    fontWeight: "700",
  },
  cardNight: {
    fontSize: 10,
    color: mainColors.grey1,
  },
  cardContent: {
    flexDirection: "row",
    marginTop: 3,
  },
  cardContentLocation: {
    marginTop: 8,
    flexDirection: "row",
  },
  location: {
    fontSize: 12,
    color: mainColors.grey1,
  },
});

export default Card;
