import React, { useEffect, useState } from "react";
import DatePicker from "react-native-neat-date-picker";
import { View, StyleSheet, Pressable, Text } from "react-native";
import Input from "../Input";
import { useDispatch, useSelector } from "react-redux";
import {
  getDataSearch,
  getGuess,
  getSearch,
} from "../../redux/reducer/slice-search";
import mainColors from "../../utils/colors";
import { useForm } from "../../utils/useForm";
import { useGetSearchAllHotelQuery } from "../../redux/reducer/slice-hotel";

const Search = () => {
  const { dateRangeItem, checkin, checkout, adult, children, room } =
    useSelector((state) => state.search);
  const { data } = useGetSearchAllHotelQuery({
    checkin_date: checkin,
    checkout_date: checkout,
    adults_number: adult,
    children_number: children,
    room_number: room,
  });
  console.log("dataHotel", data);
  const dispatch = useDispatch();
  const [date, setDate] = useState("");
  const [form, setForm] = useForm({
    adult: "",
    children: "",
    room: "",
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
    dispatch(getDataSearch(data.result));
  }, [data]);

  const onCancelRange = () => {
    dispatch(deleteDate(detailhotel));
  };

  const handleBooking = () => {
    dispatch(getGuess({ ...form }));
    setForm("reset");
    dispatch(getClearSearch());
    // navigation.navigate("Booking");
  };
  return (
    <View style={styles.datePicker}>
      <Pressable onPress={openDatePicker}>
        <Input value={date} />
      </Pressable>
      <DatePicker
        mode="range"
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
      <View>
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
    </View>
  );
};

const styles = StyleSheet.create({
  datePicker: {
    marginHorizontal: 50,
    marginTop: 100,
    marginBottom: 100,
  },
});

export default Search;
