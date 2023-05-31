import { StyleSheet, View, Text, Image } from "react-native";

import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

import BookButton from "../components/BookButton";

export default function WishlistScreen() {
  return (
    <>
      <View style={styles.wishlistContainer}>
        {/* topbar */}
        <View style={styles.topContainer}>
          <Text style={styles.wishlistTitle}>Wishlist</Text>
        </View>

        <View style={styles.listContainer}>
          {/*card*/}
          {/* {wishlistItems.map(()=>{})} */}
          <View style={styles.cardContainer}>
            <Image
              source={{
                uri: "https://source.unsplash.com/hotel" || state.image,
              }}
              style={styles.imageStyle}
            />
            {/* informationCard */}
            <View style={styles.cardInfoContainer}>
              <Text style={styles.cardCategory}>
                {"HOTEL" || state.category}
              </Text>
              <View style={styles.titleLocationContainer}>
                <Text style={styles.cardTitle}>
                  {"Rumah Mertua" || state.title}
                </Text>
                <View style={styles.locationContainer}>
                  <MaterialIcons
                    name="location-pin"
                    size={15}
                    color="#595CEB"
                  />
                  <Text style={styles.locationTitle}>
                    {"Bantul, Yogyakarta" || state.location}
                  </Text>
                </View>
              </View>
              <Text style={styles.price}>{"IDR 215.000" || state.price}</Text>
            </View>
            {/* button */}
            <View style={styles.actionContainer}>
              <FontAwesome5 name="trash" size={15} color="black" />
              <BookButton>BOOK</BookButton>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  wishlistContainer: {
    backgroundColor: "white",
    alignItems: "center",
    marginTop: 25,
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
  // listCard
  listContainer: {
    width: "100%",
    backgroundColor: "#D2D2D2",
    height: "100%",
    alignItems: "center",
  },
  //Card
  cardContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    height: "18%",
    width: "100%",
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
    flex: 1,
    padding: 10,
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  cardCategory: {
    color: "#595CEB",
    fontWeight: "bold",
    fontSize: 12,
    letterSpacing: 4,
  },
  titleLocationContainer: {
    flex: 1,
    paddingTop: 6,
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 15,
  },
  locationContainer: {
    flexDirection: "row",
  },

  locationTitle: {
    flexDirection: "row",
    fontSize: 12,
    paddingLeft: 5,
  },

  price: {
    color: "#595CEB",
    fontWeight: "bold",
    paddingLeft: 5,
  },

  // button-style
  actionContainer: {
    padding: 10,
    alignItems: "flex-end",
    justifyContent: "space-between",
  },

  contentContainer: {
    paddingVertical: 20,
  },
});
