import React from "react";
import {
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import mainColors from "../../utils/colors";
import { useDispatch, useSelector } from "react-redux";
import { addDetailHotel } from "../../redux/reducer/slice-bookingData";
import {
  addFavorites,
  removeFavorites,
} from "../../redux/reducer/slice-favorites";
import { useGetDescriptionHotelQuery } from "../../redux/reducer/slice-hotel";
import { formatRupiah } from "../../utils/formatRupiah";

const DetailHotel = ({ navigation, route }) => {
  const hotel = route.params;
  const { token } = useSelector((state) => state.authorization);
  const { data } = useGetDescriptionHotelQuery({ hotel_id: hotel.hotel_id });
  const { favorites } = useSelector((state) => state.favorite);
  const isFavorite = favorites.find((item) => item.hotel_id === hotel.hotel_id);
  const dispatch = useDispatch();
  const handleClickBook = () => {
    dispatch(addDetailHotel(hotel));
    navigation.navigate("ContactInformation");
  };
  const handleFavoriteClick = () => {
    if (!token) {
      navigation.navigate("Login");
    } else {
      dispatch(addFavorites(hotel));
    }
  };

  const handleUnFavoriteClick = () => {
    dispatch(removeFavorites(hotel?.hotel_id));
  };
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
      <ImageBackground
        style={styles.headerImage}
        source={{ uri: hotel.max_photo_url }}
      >
        <View style={styles.header}>
          <Icon
            name="arrow-back-ios"
            color={mainColors.white}
            size={28}
            onPress={navigation.goBack}
          />
          {isFavorite ? (
            <Icon
              name="favorite"
              color={mainColors.pink}
              size={28}
              onPress={handleUnFavoriteClick}
            />
          ) : (
            <Icon
              name="favorite-outline"
              color={mainColors.white}
              size={28}
              onPress={handleFavoriteClick}
            />
          )}
        </View>
      </ImageBackground>

      <View style={{ flex: 1 }}>
        <View style={styles.iconContainer}>
          <Icon name="place" color={mainColors.white} size={28} />
        </View>
        <View style={styles.containerDetail}>
          <Text style={styles.title}>{hotel.hotel_name}</Text>
          <Text style={styles.location}>
            {hotel.city_trans}, {hotel.address}
          </Text>
          <View style={styles.containerReview}>
            <View style={{ flexDirection: "row" }}>
              <Icon name="star" size={20} color={mainColors.orange} />
              <Icon name="star" size={20} color={mainColors.orange} />
              <Icon name="star" size={20} color={mainColors.orange} />
              <Text style={styles.countRating}>{hotel.review_score}</Text>
            </View>
            <Text style={styles.reviews}>{hotel.review_nr}reviews</Text>
          </View>
          <Text style={styles.description}>{data?.description}</Text>
        </View>

        <View style={styles.containerBooking}>
          <View style={styles.booking}>
            <Text style={{ fontSize: 18, color: mainColors.white }}>
              {hotel.currencycode} {formatRupiah(hotel.min_total_price)}
            </Text>
            <Text
              style={{ fontSize: 12, color: mainColors.white, marginLeft: 5 }}
            >
              /PERDAY
            </Text>
          </View>
          <TouchableOpacity style={styles.bookNow} onPress={handleClickBook}>
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
    // justifyContent: "start",
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
    color: mainColors.grey1,
    marginTop: 5,
  },
  countRating: {
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 10,
  },
  reviews: {
    fontSize: 13,
    color: mainColors.grey1,
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
    marginTop: 40,
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
    backgroundColor: mainColors.primary2,
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
    // marginBottom: ,
    backgroundColor: mainColors.primary3,
    paddingHorizontal: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});

export default DetailHotel;
