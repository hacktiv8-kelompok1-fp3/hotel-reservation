import React from "react";
import {
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
  Octicons,
} from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import ViewAllButton from "../../components/ViewAllButton.js";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";
import { useGetAllHotelsQuery } from "../../redux/reducer/slice-hotel";
import mainColors from "../../utils/colors/index.js";
import Icon from "react-native-vector-icons/MaterialIcons";
import Card from "../../components/Card/index.js";
import hotels from "../../const/hotels.js";
const Home = ({ navigation }) => {
  const { data } = useGetAllHotelsQuery();
  console.log("data", data);
  return (
    <SafeAreaView style={{ backgroundColor: mainColors.white, flex: 1 }}>
      <StatusBar
        translucent={false}
        backgroundColor={mainColors.white}
        barStyle="dark-content"
      />
      <View style={styles.header}>
        <Image
          source={require("../../assets/man-avatar.png")}
          style={styles.profileImage}
        />
        <View style={{ paddingLeft: 15 }}>
          <Text style={{ color: mainColors.grey1 }}>Location</Text>
          <Text
            style={{
              color: mainColors.grey1,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Canada
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        <View style={styles.searchInput}>
          <Icon name="search" size={25} color={mainColors.grey1} />
          <TextInput placeholder="Search address" />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Top Hotels</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={hotels}
          renderItem={({ item }) => (
            <Card hotel={item} navigation={navigation} />
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  searchInput: {
    flex: 1,
    height: 50,
    backgroundColor: mainColors.light2,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 20,
  },
});

export default Home;
