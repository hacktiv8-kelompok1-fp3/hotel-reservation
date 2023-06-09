import React from "react";
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import mainColors from "../../utils/colors";
import { formatRupiah } from "../../utils/formatRupiah";

const { width } = Dimensions.get("screen");

const Card = ({ hotel, navigation }) => {
  return (
    <Pressable
      onPress={() => navigation.navigate("DetailHotel", hotel)}
      key={hotel.hote_id}
    >
      <View style={styles.card}>
        <Image
          source={{ uri: hotel.max_photo_url }}
          style={{ height: 120, width: "100%", borderRadius: 10 }}
        />
        <Text style={styles.cardName}>{hotel.hotel_name}</Text>
        <View style={styles.cardContent}>
          <Text style={styles.cardPrice}>
            {hotel.currency_code} {formatRupiah(hotel.min_total_price)}
          </Text>
          <Text style={styles.cardNight}>/night</Text>
        </View>
        <View style={styles.cardContentLocation}>
          <Icon name="location-on" size={18} color={mainColors.grey1} />
          <Text style={styles.location}>
            {hotel.country_trans}, {hotel.city_trans}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 230,
    backgroundColor: mainColors.white,
    elevation: 10,
    width: width / 2.1,
    marginLeft: 20,
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
