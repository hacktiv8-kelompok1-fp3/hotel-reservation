import { StyleSheet, View, Text, Button, Image } from "react-native";

import {
  Ionicons,
  Feather,
  MaterialIcons,
  FontAwesome5,
} from "@expo/vector-icons";

export default function WishlistScreen() {
  return (
    <>
      <View style={styles.wishlistContainer}>
        {/* topbar */}
        <View style={styles.topContainer}>
          <Ionicons name="ios-arrow-back" size={24} color="black" />
          <Text style={styles.wishlistTitle}>Wishlist</Text>
          <Feather name="search" size={24} color="black" />
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
              <Text style={styles.cardTitle}>{"OmahManis" || state.title}</Text>
              <View style={styles.locationContainer}>
                <MaterialIcons name="location-pin" size={24} color="blue" />
                <Text style={styles.locationTitle}>
                  {"Bantul,Yogyakarta" || state.location}
                </Text>
              </View>
              <Text style={styles.price}>{"IDR 215.000" || state.price}</Text>
            </View>
            {/* button */}
            <View style={styles.actionContainer}>
              <FontAwesome5 name="trash" size={20} color="black" />
              <Button title="Book" style={styles.button} />
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
  },
  wishlistTitle: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 20,
    paddingHorizontal: 20,
  },
  // listCard
  listContainer: {
    backgroundColor: "#D2D2D2",
    height: "100%",

    alignItems: "center",
  },
  //Card
  cardContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    width: "96%",
    margin: 10,
    borderRadius: 15,
    padding: 2,
    justifyContent: "space-between",
  },
  imageStyle: {
    flex: 1, //width: 70,
    height: 100,
    borderRadius: 10,
    margin: 4,
  },
  cardInfoContainer: {
    borderLeftWidth: 1,
    borderLeftColor: "#424242",
    padding: 5,
    alignItems: "flex-start",
    justifyContent: "space-evenly",
  },
  cardCategory: {
    color: "#9D9D9D",
    fontWeight: "bold",
    fontSize: 12,
    paddingLeft: 5,
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 20,
    paddingLeft: 5,
  },
  locationContainer: {
    flexDirection: "row",
  },

  locationTitle: {
    flexDirection: "row",
  },

  price: {
    color: "blue",
    fontWeight: "bold",
    paddingLeft: 5,
  },

  // button-style
  actionContainer: {
    padding: 10,
    alignItems: "flex-end",
    justifyContent: "space-around",
  },
});
