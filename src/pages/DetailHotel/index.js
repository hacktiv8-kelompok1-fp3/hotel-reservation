import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import mainColors from "../../utils/colors";
import hotel from "../../const/hotels";

const DetailHotel = ({ navigation }) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        backgroundColor: mainColors.white,
      }}
    >
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="rgba(0,0,0,0)"
      />
      <ImageBackground style={styles.headerImage} source={hotel.image}>
        <View style={styles.header}>
          <Icon name="arrow-back-ios" color={mainColors.white} size={28} />
          <Icon name="bookmark-border" color={mainColors.white} size={28} />
        </View>
      </ImageBackground>
      <View>
        <View style={styles.iconContainer}>
          <Icon name="place" color={mainColors.white} size={28} />
        </View>
        <View style={styles.containerDetail}>
          <Text style={styles.title}>{hotel.name}</Text>
          <Text style={styles.location}>{hotel.location}</Text>
          <View style={styles.containerReview}>
            <View style={{ flexDirection: "row" }}>
              <Icon name="star" size={20} color={mainColors.orange} />
              <Icon name="star" size={20} color={mainColors.orange} />
              <Icon name="star" size={20} color={mainColors.orange} />
              <Text style={styles.countRating}>3.0</Text>
            </View>
            <Text style={styles.reviews}>365reviews</Text>
          </View>
          <Text style={styles.description}>{hotel.details}</Text>
        </View>
        <View style={styles.containerBooking}>
          <View style={styles.booking}>
            <Text style={{ fontSize: 18, color: mainColors.white }}>
              ${hotel.price}
            </Text>
            <Text
              style={{ fontSize: 12, color: mainColors.white, marginLeft: 5 }}
            >
              /PERDAY
            </Text>
          </View>
          <TouchableOpacity
            style={styles.bookNow}
            onPress={() => navigation.navigate("Booking")}
          >
            <Text
              style={{
                fontSize: 12,
                color: mainColors.dark,
                fontWeight: "bold",
              }}
            >
              Book Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerImage: {
    height: 400,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    overflow: "hidden",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  location: {
    fontSize: 12,
    fontWeight: "400",
    color: mainColors.grey,
    marginTop: 5,
  },
  countRating: {
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 10,
  },
  reviews: {
    fontSize: 13,
    color: mainColors.grey,
  },
  description: {
    marginTop: 20,
    lineHeight: 22,
  },
  booking: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  header: {
    marginTop: 60,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    justifyContent: "space-between",
  },
  bookNow: {
    height: 50,
    width: 150,
    borderRadius: 10,
    backgroundColor: mainColors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    position: "absolute",
    height: 60,
    width: 60,
    backgroundColor: mainColors.dark,
    top: -30,
    right: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  containerDetail: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  containerReview: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerBooking: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 70,
    marginTop: 40,
    backgroundColor: mainColors.dark,
    paddingHorizontal: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});

export default DetailHotel;
