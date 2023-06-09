import { Base64 } from "js-base64";
import React, { useEffect, useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import List from "../../components/List";
import { removeUsers } from "../../redux/reducer/slice-login";
import mainColors from "../../utils/colors";
const { width } = Dimensions.get("screen");
const { height } = Dimensions.get("screen");

const ProfileInfo = () => {
  const { token } = useSelector((state) => state.authorization);
  const [dataUser, setDataUser] = useState({});
  useEffect(() => {
    if (token) {
      const parse = JSON.parse(Base64.decode(token));
      setDataUser(parse);
    }
  }, [token]);
  return (
    <View style={styles.profileContainer}>
      <View style={styles.avatarContainer}>
        <Image
          source={require("../../assets/defaultUser.png")}
          style={styles.avatar}
        />
      </View>
      <View style={{ height: 10 }}></View>
      <Text style={styles.name}>{dataUser.username}</Text>
      <Text style={styles.email}>{dataUser.email}</Text>
    </View>
  );
};

const Profile = ({ navigation }) => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.authorization);
  const [dataUser, setDataUser] = useState({});
  useEffect(() => {
    if (token) {
      const parse = JSON.parse(Base64.decode(token));
      setDataUser(parse);
    }
  }, [token]);
  const handleLogout = () => {
    dispatch(removeUsers());
    navigation.replace("Login");
  };
  return (
    <ScrollView style={styles.container}>
      {!token ? (
        <>
          <View style={styles.informationContainer}>
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoText}>
                oh no we don't know who you are let's login to start
              </Text>
            </View>

            <Image
              source={require("../../assets/who.png")}
              style={{
                resizeMode: "contain",
                width: width,
                height: height / 2,
              }}
            />
            <Pressable onPress={() => navigation.navigate("Login")}>
              <View style={styles.btnLogin}>
                <Text style={styles.title}>Login</Text>
              </View>
            </Pressable>
          </View>
        </>
      ) : (
        <>
          <View style={styles.header}>
            {/* <TouchableOpacity style={styles.backButton}>
            <Image source={require('../../assets/icons/arrow-back-8.png')} size={24} color="black" style={styles.backIcon} />
          </TouchableOpacity> */}
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Profile</Text>
            </View>
          </View>
          <ProfileInfo />
          <View style={{ height: 20 }}></View>
          <List
            title="Edit Profile"
            icon="profile"
            onPress={() => navigation.navigate("UpdateProfile", dataUser)}
          />
          <List title="Logout" icon="logout" onPress={handleLogout} />
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  avatarContainer: {
    borderRadius: 60,
    borderWidth: 2,
    borderColor: mainColors.grey1,

    padding: 8,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 60,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: mainColors.primary2,
  },
  email: {
    fontSize: 18,
    color: mainColors.primary2,
  },
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  backButton: {
    padding: 8,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  infoTextContainer: {
    width: width / 1.5,
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  infoText: {
    // flexShrink: false,
    marginTop: 40,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: mainColors.primary2,
    // flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: mainColors.white,
  },
  informationContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    // height: "100%",
    // flex: 1,

    height: height / 1.3,
  },
  btnLogin: {
    backgroundColor: mainColors.primary2,
    width: width / 3,
    height: 40,
    borderRadius: 15,
    elevation: 5,
    paddingVertical: 5,
  },
});

export default Profile;
