import React, { useState } from "react";
import {
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import DatePicker from "react-native-neat-date-picker";
import IconQuantity from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/MaterialIcons";
import hotel from "../../const/hotels";
import mainColors from "../../utils/colors";

const Booking = ({ navigation }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const onConfirmRange = (date) => {
    setStartDate(date.startDateString);
    setEndDate(date.endDateString);
  };
  const onCancelRange = () => {
    setStartDate("");
    setEndDate("");
  };
  return (
    <ImageBackground
      style={styles.conatiner}
      imageStyle={styles.image}
      source={hotel.image}
    >
      <StatusBar hidden />
      <View style={styles.header}>
        <Icon
          name="arrow-back-ios"
          color={mainColors.dark}
          size={28}
          onPress={navigation.goBack}
        />
        <View style={styles.detailBooking}>
          <Text style={styles.hotel}>Hotel Retnograde</Text>
          <Text style={styles.date}>
            {startDate} - {endDate}
          </Text>
        </View>
      </View>
      <View style={styles.count3}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.step1}>
            <Text style={styles.label1}>Dates</Text>
          </View>
          <View style={styles.datePicker}>
            <DatePicker
              mode="range"
              withoutModal={true}
              onConfirm={onConfirmRange}
              onCancel={onCancelRange}
            />
          </View>
          <View style={styles.step1}>
            <Text style={styles.label1}>Guests</Text>
          </View>
          <View
            style={{
              marginVertical: 20,
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: mainColors.light,
              paddingVertical: 15,
              paddingHorizontal: 10,
              borderRadius: 15,
            }}
          >
            <View>
              <Text>Adults</Text>
              <Text>after 12</Text>
            </View>
            <View style={styles.quantityContainer}>
              <View style={styles.quantityBtn}>
                <IconQuantity name="minus" size={20} />
              </View>
              <Text style={{ fontWeight: "bold" }}>1</Text>
              <View style={styles.quantityBtn}>
                <IconQuantity name="plus" size={20} />
              </View>
            </View>
          </View>
          <View
            style={{
              marginVertical: 20,
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: mainColors.light,
              paddingVertical: 15,
              paddingHorizontal: 10,
              borderRadius: 15,
            }}
          >
            <View>
              <Text>Children</Text>
              <Text>0-12 years</Text>
            </View>
            <View style={styles.quantityContainer}>
              <View style={styles.quantityBtn}>
                <IconQuantity name="minus" size={20} />
              </View>
              <Text style={{ fontWeight: "bold" }}>1</Text>
              <View style={styles.quantityBtn}>
                <IconQuantity name="plus" size={20} />
              </View>
            </View>
          </View>
          <View style={styles.footer}>
            <View>
              <Text style={{ color: mainColors.dark, fontWeight: "bold" }}>
                $2134
              </Text>
              <Text style={{ color: mainColors.dark, fontWeight: "bold" }}>
                Total Price
              </Text>
            </View>
            <TouchableOpacity
              style={styles.bookNowBtn}
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={{ color: mainColors.white, fontWeight: "bold" }}>
                Book Now
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
  image: {
    opacity: 0.6,
  },
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
  },
  hotel: {
    color: mainColors.dark,
    fontWeight: "bold",
    fontSize: 17,
  },
  date: {
    color: mainColors.dark,
    ontWeight: "400",
    fontSize: 15,
    marginTop: 5,
  },
  count3: {
    flex: 1,
    backgroundColor: mainColors.white,
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
  },
  step1: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label1: {
    fontSize: 17,
    fontWeight: "bold",
  },
  label2: {
    fontSize: 17,
    fontWeight: "400",
    color: mainColors.primary,
  },
  datePicker: {
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  quantityContainer: {
    height: 35,
    width: 100,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  quantityBtn: {
    height: 25,
    width: 25,
    borderRadius: 7,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    height: 70,
    backgroundColor: mainColors.light,
    borderRadius: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bookNowBtn: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: mainColors.dark,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
});

export default Booking;
