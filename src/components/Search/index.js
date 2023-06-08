import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import DatePicker from "react-native-neat-date-picker";
import { useDispatch, useSelector } from "react-redux";
import { getGuess, getSearch } from "../../redux/reducer/slice-search";
import mainColors from "../../utils/colors";
import { useForm } from "../../utils/useForm";
import GuestInputSearch from "../GuestSearch";
import Input from "../Input";

const Search = ({ navigation }) => {
  const [itemLocation] = useState([
    { id: 1, label: "Jakarta", value: -2679652 },
    { id: 2, label: "Yogyakarta", value: -2703546 },
    { id: 3, label: "Bali", value: -2701757 },
  ]);
  const { dateRangeItem, adult, children, room } = useSelector(
    (state) => state.search
  );
  const dispatch = useDispatch();
  const [date, setDate] = useState("");
  const [form, setForm] = useForm({
    location: -2679652,
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

  const onCancelRange = () => {
    setShowDatePicker(false);
  };

  const handleBooking = () => {
    dispatch(getGuess({ ...form }));
    setForm("reset");
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
      <GuestInputSearch
        title="Adults"
        description="Over 17 Years"
        count={adult}
        type="adults"
      />
      <GuestInputSearch
        title="Children"
        description="Under 17 Years"
        count={children}
        type="children"
      />
      <GuestInputSearch title="Room" count={room} type="room" />
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
