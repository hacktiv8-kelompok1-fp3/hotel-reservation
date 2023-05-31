import React from "react";
import {
  ImageBackground,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import DatePicker from "react-native-neat-date-picker";
import { useDispatch, useSelector } from "react-redux";
import GuestInput from "../../components/GuestInput";
import HeaderBooking from "../../components/HeaderBooking";
import hotel from "../../const/hotels";
import {
  addBookingDate,
  handleAdd,
} from "../../redux/reducer/slice-bookingData";
import mainColors from "../../utils/colors";

const Booking = ({ navigation }) => {
  const dispatch = useDispatch();
  const {
    detailhotel,
    checkin,
    checkout,
    adults,
    children,
    room,
    totalBooking,
  } = useSelector((state) => state.bookingData);

  const onConfirmRange = (date) => {
    console.log("date", date);
    dispatch(
      addBookingDate({
        startDate: date.startDate,
        endDate: date.endDate,
      })
    );
  };

  const onCancelRange = () => {
    setStartDate("");
    setEndDate("");
  };

  return (
    <ImageBackground
      style={styles.conatiner}
      imageStyle={styles.image}
      source={detailhotel.image}
    >
      <StatusBar hidden />
      <HeaderBooking
        title={detailhotel?.name}
        startDate={checkin}
        endDate={checkout}
        onPress={navigation.goBack}
      />
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
              colorOptions={{
                backgroundColor: mainColors.light1,
                headerColor: mainColors.light1,
                headerTextColor: mainColors.primary2,
                weekDaysColor: mainColors.primary2,
                dateTextColor: mainColors.primary3,
                selectedDateBackgroundColor: mainColors.primary3,
              }}
            />
          </View>
          <View style={styles.step1}>
            <Text style={styles.label1}>Guests & Room</Text>
          </View>
          <GuestInput
            title="Adults"
            description="Over 17 Years"
            count={adults}
            onPress={() => dispatch(handleAdd({ type: "adults" }))}
          />
          <GuestInput
            title="Children"
            description="Under 17 Years"
            count={children}
            onPress={() => dispatch(handleAdd({ type: "children" }))}
          />
          <GuestInput
            title="Room"
            count={room}
            onPress={() => dispatch(handleAdd({ type: "room" }))}
          />
          <View style={styles.footer}>
            <View>
              <Text style={{ color: mainColors.primary3, fontWeight: "bold" }}>
                ${totalBooking}
              </Text>
              <Text style={{ color: mainColors.primary3, fontWeight: "bold" }}>
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
  calendar: {
    backgroundColor: mainColors.primary3,
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

  footer: {
    height: 70,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bookNowBtn: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: mainColors.primary2,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
});

export default Booking;
