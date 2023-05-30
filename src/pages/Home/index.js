import React from "react";
import {
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
  Octicons,
} from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import ViewAllButton from "../../components/ViewAllButton.js";
import { View, StyleSheet, Text, Image, TextInput } from "react-native";
import { useGetAllHotelsQuery } from "../../redux/reducer/slice-hotel";

const Home = () => {
  const { data } = useGetAllHotelsQuery();
  // console.log("data", data);
  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.appContainer}>
        {/* location Notif */}
        <View style={styles.infoContainer}>
          <View style={styles.shortProfilContainer}>
            <Image
              source={require("../../assets/man-avatar.png")}
              style={styles.profilePicture}
            />
            <View style={styles.welcomeContainer}>
              <Text style={styles.welcomeWord}>👋🏼 HELLO THERE </Text>
              <Text style={styles.userName}>
                {"Gilang Ahmad" || dataFromState}
              </Text>
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
            <View style={styles.card}>
              <Image></Image>
              <Text>TitleOfCard</Text>
              <Text>Price</Text>
              <Text>Location</Text>
              <Text>Info</Text>
            </View>
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
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: "white",
    alignItems: "center",
    marginVertical: 25,
  },

  // top
  infoContainer: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  shortProfilContainer: {
    flexDirection: "row",
  },
  profilePicture: {
    width: 35,
    height: 35,
    borderRadius: 50,
    borderColor: "black",
    borderWidth: 2,
  },
  welcomeContainer: {
    padding: 1,
    height: 35,
    marginLeft: 4,
  },
  welcomeWord: {
    fontSize: 10,
    color: "#9D9D9D",
    fontWeight: "bold",
  },
  userName: {
    fontWeight: "bold",
  },
  bellIcon: {
    backgroundColor: "#DDD",
    padding: 4,

    borderRadius: 50,
    justifyContent: "center",
  },

  //search bar
  searchContainer: {
    flexDirection: "row",
    width: "85%",
    justifyContent: "space-between",
    backgroundColor: "#DDD",
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
    backgroundColor: "#DDD",
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
  card: {
    borderWidth: 2,
    borderColor: "black",
    padding: 5,
  },
});

export default Home;
