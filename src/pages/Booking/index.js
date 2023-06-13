import React, { useCallback } from "react";
import {
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
import {
  addBookingDate,
  clearBooking,
  deleteDate,
} from "../../redux/reducer/slice-bookingData";
import { addHistoryCheckout } from "../../redux/reducer/slice-historyCheckout";
import mainColors from "../../utils/colors";
import { formatRupiah } from "../../utils/formatRupiah";

const Booking = ({ navigation }) => {
  const dispatch = useDispatch();
  const {
    detailhotel,
    contactInformation,
    checkin,
    checkout,
    adults,
    children,
    room,
    totalBooking,
    numDays,
  } = useSelector((state) => state.bookingData);

  const onConfirmRange = (date) => {
    dispatch(
      addBookingDate({
        startDate: date.startDate,
        endDate: date.endDate,
      })
    );
  };

  const onCancelRange = () => {
    dispatch(deleteDate(detailhotel));
  };

  function generateIdRandom(length) {
    let result = "";
    const number = "0123456789";
    const lengthCharacter = number.length;
    for (let i = 0; i < length; i++) {
      result += number.charAt(Math.floor(Math.random() * lengthCharacter));
    }
    return result;
  }
  const handleBooking = useCallback(() => {
    const payload = {
      id: generateIdRandom(11),
      hotel: detailhotel,
      contact: contactInformation,
      room,
      checkin,
      checkout,
      adults,
      children,
      totalBooking,
      numDays,
    };
    dispatch(addHistoryCheckout(payload));
    navigation.navigate("My Orders");
    dispatch(clearBooking());
  }, [
    detailhotel,
    contactInformation,
    checkin,
    checkout,
    adults,
    children,
    totalBooking,
    room,
  ]);

  return (
    <View style={styles.conatiner}>
      <StatusBar hidden />
      <HeaderBooking
        title={detailhotel?.hotel_name}
        startDate={checkin}
        endDate={checkout}
        onPress={() => navigation.navigate("ContactInformation")}
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
            type="adults"
          />
          <GuestInput
            title="Children"
            description="Under 17 Years"
            count={children}
            type="children"
          />
          <GuestInput title="Room" count={room} type="room" />
          <View style={styles.footer}>
            <View>
              <Text style={{ color: mainColors.primary3, fontWeight: "bold" }}>
                {detailhotel.currencycode} {formatRupiah(totalBooking)}
              </Text>
              <Text style={{ color: mainColors.primary3, fontWeight: "bold" }}>
                Total Price
              </Text>
            </View>
            {room > 0 && adults > 0 && (
              <TouchableOpacity
                style={styles.bookNowBtn}
                onPress={handleBooking}
              >
                <Text style={{ color: mainColors.white, fontWeight: "bold" }}>
                  Book Now
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: mainColors.primary2,
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
