import React, { useEffect, useState } from "react";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useDispatch } from "react-redux";
import Input from "../../components/Input";
import { addUsers } from "../../redux/reducer/slice-login";
import mainColors from "../../utils/colors";

const UpdateProfile = ({ navigation, route }) => {
  const users = route.params;
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    setForm(users);
  }, []);

  const handleChangeInput = (key, value) => {
    setForm({
      ...form,
      [key]: value,
    });
  };
  const handleBooking = () => {
    dispatch(addUsers(form));
    navigation.navigate("Profile");
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        translucent={false}
        backgroundColor={mainColors.white}
        barStyle="dark-content"
      />
      <View style={styles.header}>
        <Icon
          name="arrow-back-ios"
          color={mainColors.dark}
          size={28}
          onPress={navigation.goBack}
        />
        <View style={styles.detailBooking}>
          <Text style={styles.hotel}>Update Profile</Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Input
            label="FullName"
            value={form.username}
            onChangeText={(value) => handleChangeInput("username", value)}
          />
          <Input label="Email" value={form.email} disable />
          <Pressable style={styles.btnLogin} onPress={handleBooking}>
            <Text style={styles.textLoginBtn}>continue</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  detailBooking: {
    flex: 1,
    alignItems: "center",
    paddingRight: 20,
  },
  hotel: {
    color: mainColors.dark,
    fontWeight: "bold",
    fontSize: 17,
  },
  date: {
    color: mainColors.white,
    fontWeight: "400",
    fontSize: 13,
    marginTop: 5,
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  btnLogin: {
    padding: 7 * 2,
    backgroundColor: mainColors.primary3,
    marginVertical: 10 * 3,
    borderRadius: 10,
    shadowColor: mainColors.primary3,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  textLoginBtn: {
    fontWeight: "600",
    color: mainColors.white,
    textAlign: "center",
    fontSize: 18,
  },
});

export default UpdateProfile;
