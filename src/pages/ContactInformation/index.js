import React, { useCallback } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  Pressable,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import mainColors from "../../utils/colors";
import TextInputAuth from "../../components/TextInputAuth";
import { useForm } from "../../utils/useForm";
import { useDispatch, useSelector } from "react-redux";
import {
  addContactInformation,
  clearBooking,
} from "../../redux/reducer/slice-bookingData";
import {
  addFieldContact,
  addHistoryCheckout,
} from "../../redux/reducer/slice-historyCheckout";

const ContactInformation = ({ navigation }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useForm({
    fullName: "",
    email: "",
    phoneNumber: "",
  });

  const handleBooking = () => {
    dispatch(addContactInformation({ ...form }));
    navigation.navigate("Booking");
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: mainColors.primary2 }}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="rgba(0,0,0,0)"
      />
      <View style={styles.header}>
        <Icon
          name="arrow-back-ios"
          color={mainColors.white}
          size={28}
          onPress={navigation.goBack}
        />
        <View style={styles.detailBooking}>
          <Text style={styles.hotel}>Contact Information</Text>
        </View>
      </View>
      <View style={styles.count3}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ marginTop: 40 }}>
            <TextInputAuth
              placeholder="FullName"
              value={form.fullName}
              onChangeText={(value) => setForm("fullName", value)}
              type="text"
            />
            <TextInputAuth
              placeholder="Email"
              value={form.email}
              onChangeText={(value) => setForm("email", value)}
              type="email"
            />
            <TextInputAuth
              keyboardType="number-pad"
              placeholder="PhoneNumber"
              value={form.phoneNumber}
              onChangeText={(value) => setForm("phoneNumber", value)}
              // type="text"
            />
          </View>
          <Pressable style={styles.btnLogin} onPress={handleBooking}>
            <Text style={styles.textLoginBtn}>continue to booking</Text>
          </Pressable>
        </ScrollView>
      </View>
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
    marginTop: 10,
  },
  detailBooking: {
    flex: 1,
    alignItems: "center",
    textAlign: "center",
    paddingRight: 20,
  },
  count3: {
    flex: 1,
    backgroundColor: mainColors.white,
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
  },
  hotel: {
    color: mainColors.white,
    fontWeight: "bold",
    fontSize: 17,
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
    fontSize: 20,
  },
});

export default ContactInformation;
