import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import mainColors from "../../utils/colors";
import List from "../../components/List";
import { useDispatch, useSelector } from "react-redux";
import { removeUsers } from "../../redux/reducer/slice-login";
import { Base64 } from "js-base64";

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
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: mainColors.primary2,
  },
});

export default Profile;
