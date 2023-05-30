import { View, StyleSheet, TextInput, Text, Image, Button } from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
  Octicons,
} from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import ViewAllButton from "../components/ViewAllButton";

export default function HomeScreen() {
  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.appContainer}>
        {/* location Notif */}
        <View style={styles.infoContainer}>
          <View>
            <Text>Current Location</Text>
            <View style={styles.locationContainer}>
              <Ionicons name="md-location-sharp" size={20} color="#B36A34" />
              <Text style={styles.locationTitle}>Blitung, Sulawesi Utara</Text>
            </View>
          </View>
          {/*  */}

          <MaterialCommunityIcons
            style={styles.bellIcon}
            name="bell-outline"
            size={30}
            color="black"
          />
        </View>

        {/* search bar */}
        <View style={styles.searchContainer}>
          <AntDesign name="search1" size={24} color="black" />
          <TextInput
            style={styles.textInput}
            placeholder="Search here..."
          ></TextInput>
          <Octicons name="filter" size={24} color="black" />
        </View>
        {/*  */}

        {/* first-section */}
        <View style={styles.SectionContainer}>
          <View style={styles.SectionTitleContainer}>
            <Text style={styles.firstSectionTitle}>House Near You</Text>
            {/* <Button title="View All" /> */}
            <ViewAllButton>View All</ViewAllButton>
          </View>
          <View>
            <Image></Image>
            <Text>TitleOfCard</Text>
            <Text>Price</Text>
            <Text>Location</Text>
            <Text>Info</Text>
          </View>
        </View>

        {/* second-section */}
        <View style={styles.SectionContainer}>
          <View style={styles.SectionTitleContainer}>
            <Text style={styles.firstSectionTitle}>Featured Listings</Text>
            {/* <Button title="View All" /> */}
            <ViewAllButton>View All</ViewAllButton>
          </View>
          <View>
            <Image></Image>
            <Text>TitleOfCard</Text>
            <Text>Price</Text>
            <Text>Location</Text>
            <Text>Info</Text>
          </View>
        </View>
        {/* Navbar */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    justifyContent: "space-around",
    backgroundColor: "#DDD",
    alignItems: "center",
    marginVertical: 25,
  },
  infoContainer: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },

  locationContainer: {
    flexDirection: "row",
  },
  locationTitle: {
    fontWeight: "bold",
    fontSize: 15,
  },
  bellIcon: {
    backgroundColor: "white",
    padding: 4,

    borderRadius: 50,
    justifyContent: "center",
  },
  //search bar
  searchContainer: {
    flexDirection: "row",
    width: "85%",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 40,
    marginVertical: 10,
  },
  textInput: {
    borderRightWidth: 1,
    flex: 1,
    marginHorizontal: 20,
  },
  //first-section
  SectionContainer: {
    marginVertical: 15,
    backgroundColor: "white",
    borderRadius: 20,
    width: "100%",
    padding: 10,
  },
  SectionTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  firstSectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
