import React, { useEffect, useState } from "react";
import DatePicker from "react-native-neat-date-picker";
import { View, StyleSheet, Pressable, Text } from "react-native";
import Input from "../Input";
import { useDispatch, useSelector } from "react-redux";
import {
  getClearSearch,
  getDataSearch,
  getGuess,
  getSearch,
} from "../../redux/reducer/slice-search";
import mainColors from "../../utils/colors";
import { useForm } from "../../utils/useForm";
import { useGetSearchAllHotelQuery } from "../../redux/reducer/slice-hotel";

const Search = ({ navigation }) => {
  const [itemLocation] = useState([
    { id: 1, label: "Jakarta", value: -2679652 },
    { id: 2, label: "Yogyakarta", value: -2703546 },
    { id: 3, label: "Bali", value: -2701757 },
  ]);
  const { dateRangeItem, checkin, checkout, adult, children, room, location } =
    useSelector((state) => state.search);
  const { data } = useGetSearchAllHotelQuery({
    dest_id: location,
    checkin_date: checkin,
    checkout_date: checkout,
    adults_number: adult,
    children_number: children,
    room_number: room,
  });
  // console.log("dataHotel", data);
  const dispatch = useDispatch();
  const [date, setDate] = useState("");
  const [form, setForm] = useForm({
    location: -2679652,
    adult: 1,
    children: 1,
    room: 1,
  });
  const [showDatePicker, setShowDatePicker] = useState(false);
  const openDatePicker = () => setShowDatePicker(true);

  const onConfirmRange = (date) => {
    setShowDatePicker(false);
    dispatch(
      getSearch({
        startDate: date.startDate,
        endDate: date.endDate,
      })
    );
  };

  useEffect(() => {
    setDate(dateRangeItem);
  }, [dateRangeItem]);

  useEffect(() => {
    dispatch(getDataSearch(data?.result));
  }, [data, dispatch]);

  const onCancelRange = () => {
    setShowDatePicker(false);
    // dispatch(deleteDate(detailhotel));
  };

  const handleBooking = () => {
    dispatch(getGuess({ ...form }));
    setForm("reset");
    // dispatch(getClearSearch());
    navigation.navigate("MainApp");
  };
  return (
    <View style={styles.container}>
      <Input
        value={form.location}
        select
        selectItem={itemLocation}
        onValueChange={(value) => setForm("location", value)}
      />
      <Pressable style={styles.inputDate} onPress={openDatePicker}>
        <Text>{date}</Text>
      </Pressable>
      <DatePicker
        mode="range"
        modalStyles={styles.modalRange}
        isVisible={showDatePicker}
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
      <Input
        value={form.adult}
        onChangeText={(value) => setForm("adult", value)}
      />
      <Input
        value={form.children}
        onChangeText={(value) => setForm("children", value)}
      />
      <Input
        value={form.room}
        onChangeText={(value) => setForm("room", value)}
      />
      <Pressable style={styles.btnLogin} onPress={handleBooking}>
        <Text style={styles.textLoginBtn}>continue to booking</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  modalRange: {
    marginTop: -50,
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  inputDate: {
    borderWidth: 1,
    borderRadius: 10,
    height: 55,
    backgroundColor: mainColors.light2,
    paddingHorizontal: 20,
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 30,
  },
});

export default Search;
