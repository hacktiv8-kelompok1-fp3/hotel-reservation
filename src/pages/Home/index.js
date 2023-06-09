import { StatusBar } from "expo-status-bar";
import { Base64 } from "js-base64";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card/index.js";
import SmallCard from "../../components/SmallCard/index.js";
import {
  useGetAllCitiesQuery,
  useGetSearchAllHotelQuery,
} from "../../redux/reducer/slice-hotel";
import { getClearSearch } from "../../redux/reducer/slice-search.js";
import mainColors from "../../utils/colors/index.js";
import CardBig from "../../components/CardBig";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const { checkin, checkout, adult, children, room, location } = useSelector(
    (state) => state.search
  );
  const { data: cities } = useGetAllCitiesQuery({ country: "id" });
  const { token } = useSelector((state) => state.authorization);
  const { data: hotel } = useGetSearchAllHotelQuery({
    dest_id: location,
    checkin_date: checkin,
    checkout_date: checkout,
    adults_number: adult,
    children_number: children,
    room_number: room,
  });
  const [dataUser, setDataUser] = useState({});

  useEffect(() => {
    if (token) {
      const parse = JSON.parse(Base64.decode(token));
      setDataUser(parse);
    }
  }, [token]);

  const handleSearch = () => {
    navigation.navigate("SearchHotel");
    dispatch(getClearSearch());
  };

  return (
    <SafeAreaView style={{ backgroundColor: mainColors.white, flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar
          translucent={false}
          backgfroundColor={mainColors.white}
          barStyle="dark-content"
        />
        {!token ? (
          <View style={styles.header}>
            <Image
              source={require("../../assets/defaultUser.png")}
              style={styles.profileImage}
            />
            <View
              style={{
                paddingLeft: 15,
                height: 50,
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  height: 20,
                  width: 80,
                  backgroundColor: mainColors.grey3,
                  borderRadius: 15,
                }}
              ></View>
              <View
                style={{
                  height: 20,
                  width: 120,
                  backgroundColor: mainColors.grey3,
                  borderRadius: 15,
                }}
              ></View>
            </View>
          </View>
        ) : (
          <View style={styles.header}>
            <Image
              source={require("../../assets/man-avatar.png")}
              style={styles.profileImage}
            />
            <View style={{ paddingLeft: 15 }}>
              <Text
                style={{
                  color: mainColors.primary2,
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              >
                {`Hi, ${dataUser.username}`}
              </Text>
              <Text
                style={{
                  color: mainColors.grey1,
                  fontSize: 13,
                }}
              >
                {dataUser.email}
              </Text>
            </View>
          </View>
        )}

        <View>
          <Text style={styles.title}>✈️ Cities</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={cities?.result.slice(0, 8)}
            renderItem={({ item }) => <SmallCard locationName={item} />}
          />
        </View>
        {/*  */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            paddingTop: 20,
            elevation: 10,
          }}
        >
          <Pressable style={styles.searchInput} onPress={handleSearch}>
            <Icon name="search" size={25} color={mainColors.grey1} />
            <Text style={{ alignItems: "center" }}>Search Hotel</Text>
          </Pressable>
        </View>
        {/*  */}

        <View style={{ paddingVertical: 30 }}>
          <Text style={styles.title}>⭐ Top Hotels</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={hotel?.result?.slice(0, 8)}
            renderItem={({ item }) => (
              <Card hotel={item} navigation={navigation} />
            )}
          />
          <Text style={styles.title}>👍🏼Recommendation Hotels</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={hotel?.result.slice(0, 8)}
            renderItem={({ item }) => (
              <CardBig hotel={item} navigation={navigation} />
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    paddingHorizontal: 20,
    marginTop: 15,
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
    borderRadius: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 20,
    color: mainColors.primary2,
  },
});

export default Home;
