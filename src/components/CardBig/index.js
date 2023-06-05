import React from "react";
import {
  View,
  StyleSheet,
  Pressable,
  Dimensions,
  Image,
  Text,
} from "react-native";
import mainColors from "../../utils/colors";
import Icon from "react-native-vector-icons/MaterialIcons";
const { width } = Dimensions.get("screen");

const CardBig = ({ hotel, navigation }) => {
  return (
    <Pressable
      key={hotel.hote_id}
      activeOpacity={0.8}
      onPress={() => navigation.navigate("DetailHotel", hotel)}
    >
      <View style={styles.card}>
        <Image
          source={require("../../assets/hotel4.jpg")}
          style={styles.cardImage}
        />
        <View style={{ marginTop: 10 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: mainColors.primary3,
              }}
            >
              {hotel.name}
            </Text>
            <View style={styles.cardContent}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  color: mainColors.primary2,
                }}
              >
                ${hotel.number_of_rooms}
              </Text>
              <Text style={styles.cardNight}>/night</Text>
            </View>
          </View>
          <View style={styles.cardContentLocation}>
            {/* <Icon name="location-on" size={18} color={mainColors.grey1} /> */}
            <Text style={styles.location}>
              {hotel.country}, {hotel.city}
            </Text>
          </View>
          <View style={{ marginTop: 5, flexDirection: "row" }}>
            <View style={styles.facility}>
              <Icon name="hotel" size={18} />
              <Text style={styles.facilityText}>2</Text>
            </View>
            <View style={styles.facility}>
              <Icon name="bathtub" size={18} />
              <Text style={styles.facilityText}>2</Text>
            </View>
            <View style={styles.facility}>
              <Icon name="aspect-ratio" size={18} />
              <Text style={styles.facilityText}>100m</Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 270,
    backgroundColor: mainColors.white,
    elevation: 10,
    width: width - 40,
    marginLeft: 20,
    padding: 15,
    borderRadius: 20,
    marginVertical: 20,
  },
  cardImage: {
    width: "100%",
    height: 140,
    borderRadius: 15,
  },
  facility: {
    flexDirection: "row",
    marginRight: 15,
  },
  facilityText: {
    marginLeft: 5,
    color: mainColors.grey1,
  },
  cardContent: {
    flexDirection: "row",
  },
  cardNight: {
    fontSize: 13,
    color: mainColors.grey1,
  },
  cardContentLocation: {
    marginTop: 10,
    flexDirection: "row",
  },
  location: {
    fontSize: 12,
    color: mainColors.grey1,
  },
});

export default CardBig;
