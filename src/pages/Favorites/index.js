import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";

import { useDispatch, useSelector } from "react-redux";
import BookButton from "../../components/BookButton";
import { removeFavorites } from "../../redux/reducer/slice-favorites";
import mainColors from "../../utils/colors";

export default function WishlistScreen({ navigation }) {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.favorite);
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar
          translucent={false}
          backgroundColor={mainColors.white}
          barStyle="dark-content"
        />
        <View style={styles.header}>
          <Text style={styles.title}>Wishlist</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {favorites?.map((item) => {
            return (
              <View style={styles.listContainer} key={item?.hotel_id}>
                <View style={styles.cardContainer}>
                  <Image
                    source={{ uri: item?.max_photo_url }}
                    style={styles.imageStyle}
                  />
                  <View style={styles.cardInfoContainer}>
                    <Text style={styles.cardCategory}>
                      {item?.accommodation_type_name}
                    </Text>
                    <View style={styles.titleLocationContainer}>
                      <Text style={styles.cardTitle}>{item?.hotel_name}</Text>
                      <View style={styles.locationContainer}>
                        <Icon
                          name="location-on"
                          size={15}
                          color={mainColors.grey1}
                        />
                        <Text style={styles.locationTitle}>
                          {item?.country_trans}, {item?.city}
                        </Text>
                      </View>
                    </View>
                    <Text style={styles.price}>${item?.min_total_price}</Text>
                  </View>
                  <View style={styles.actionContainer}>
                    <View style={{ alignItems: "center" }}>
                      <Icon
                        name="favorite"
                        color={mainColors.pink}
                        size={28}
                        onPress={() =>
                          dispatch(removeFavorites(item?.hotel_id))
                        }
                      />
                    </View>
                    <BookButton navigation={navigation} data={item}>
                      BOOK
                    </BookButton>
                  </View>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  wishlistContainer: {
    backgroundColor: "white",
    alignItems: "center",
    marginTop: 25,
  },
  header: {
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    color: mainColors.primary2,
    fontWeight: "bold",
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    shadowColor: "black",
    height: "6%",
    paddingHorizontal: 15,
    marginBottom: 5,
    marginTop: 1,
  },
  wishlistTitle: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 20,
    paddingHorizontal: 20,
    textAlign: "center",
    letterSpacing: 4,
  },
  //Card
  cardContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    minHeight: 140,
    // height: 120,
    marginTop: 10,
    borderRadius: 15,
    padding: 5,
    justifyContent: "space-between",
  },
  imageStyle: {
    width: "26%",
    height: "100%",
    borderRadius: 10,
  },
  cardInfoContainer: {
    paddingLeft: 15,
    alignItems: "flex-start",
    flex: 1,
    justifyContent: "space-between",
  },
  cardCategory: {
    color: mainColors.primary2,
    fontWeight: "bold",
    fontSize: 12,
    letterSpacing: 4,
  },
  titleLocationContainer: {
    paddingTop: 6,
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 15,
    color: mainColors.primary3,
  },
  locationContainer: {
    flexDirection: "row",
    paddingVertical: 5,
  },

  locationTitle: {
    flexDirection: "row",
    fontSize: 10,
    paddingLeft: 5,
    color: mainColors.grey1,
  },

  price: {
    color: mainColors.primary2,
    fontWeight: "bold",
    marginTop: 3,
  },

  // button-style
  actionContainer: {
    padding: 10,
    justifyContent: "space-between",
  },

  contentContainer: {
    paddingVertical: 20,
  },
});
