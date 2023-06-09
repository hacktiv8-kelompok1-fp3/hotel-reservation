import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import DatePicker from "react-native-neat-date-picker";
import { useDispatch, useSelector } from "react-redux";
import { getGuess, getSearch } from "../../redux/reducer/slice-search";
import mainColors from "../../utils/colors";
import { useForm } from "../../utils/useForm";
import GuestInputSearch from "../GuestSearch";
import Input from "../Input";
import { AntDesign } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialIcons";

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
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>Search</Text>
      </View>
      <View>
        <Text>Location : </Text>
        <Input
          value={form.location}
          select
          selectItem={itemLocation}
          onValueChange={(value) => setForm("location", value)}
        />
      </View>

      <View style={styles.inputDateContainer}>
        <Text>Date : </Text>
        <Pressable style={styles.inputDate} onPress={openDatePicker}>
          <Text>{date}</Text>
          <AntDesign name="calendar" size={24} color={mainColors.primary2} />
        </Pressable>
      </View>
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

      <Pressable style={styles.btnSearch} onPress={handleBooking}>
        <View>
          <Icon name="search" size={25} color={mainColors.grey1} />
          {/* <Text style={styles.textSearchBtn}>Search</Text> */}
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,

    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    borderBottomColor: mainColors.primary,
    borderBottomWidth: 2,
    fontSize: 20,
    color: mainColors.primary,
    fontWeight: "bold",
  },
  mainContainer: {
    backgroundColor: "#fff",
    // paddingTop: 10,
    paddingBottom: 30,
    paddingHorizontal: 30,
    height: "100%",
    justifyContent: "space-between",
  },
  inputDateContainer: {
    marginVertical: 20,
  },
  modalRange: {
    marginTop: -50,
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  inputDate: {
    borderWidth: 1,
    borderRadius: 10,
    // maxHeight: 55,
    height: 55,
    backgroundColor: mainColors.light2,
    paddingHorizontal: 20,
    justifyContent: "center",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btnSearch: {
    backgroundColor: mainColors.primary2,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
  },
  // textSearchBtn: {
  //   textAlign: "center",
  //   color: "white",
  //   fontWeight: "bold",

  //   fontSize: 20,
  // },
});

export default Search;
