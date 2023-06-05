import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Base64, decode } from "js-base64";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useSelector } from "react-redux";
import Card from "../../components/Card/index.js";
import CardBig from "../../components/CardBig/index.js";
import { useGetAllHotelsQuery } from "../../redux/reducer/slice-hotel";
import mainColors from "../../utils/colors/index.js";
const Home = ({ navigation }) => {
  const { data } = useGetAllHotelsQuery();
  const { token } = useSelector((state) => state.authorization);
  const [dataUser, setDataUser] = useState({});
  useEffect(() => {
    if (!token) {
      navigation.replace("Login");
    } else {
      const parse = JSON.parse(Base64.decode(token));
      setDataUser(parse);
    }
  }, [token]);
  return (
    <SafeAreaView style={{ backgroundColor: mainColors.white, flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
            <Text
              style={{
                color: mainColors.primary2,
                fontWeight: "bold",
                fontSize: 15,
              }}
            >
              Hi, {dataUser.username}
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
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
          }}
        >
          <View style={styles.searchInput}>
            <Icon name="search" size={25} color={mainColors.grey1} />
            <TextInput
              placeholder="Search address"
              style={{ paddingLeft: 10 }}
            />
          </View>
        </View>

        <View style={{ paddingVertical: 30 }}>
          <Text style={styles.title}>Top Hotels</Text>

          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data?.result.slice(0, 8)}
            renderItem={({ item }) => (
              <Card hotel={item} navigation={navigation} />
            )}
          />
          <Text style={styles.title}>Rekomendasi Hotels</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data?.result.slice(0, 8)}
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
