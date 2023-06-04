import React from "react";
import { View, StyleSheet, Text } from "react-native";
import mainColors from "../../utils/colors";
import Icon from "react-native-vector-icons/MaterialIcons";
const HeaderBooking = ({ onPress, title, startDate, endDate }) => {
  return (
    <View style={styles.header}>
      <Icon
        name="arrow-back-ios"
        color={mainColors.white}
        size={28}
        onPress={onPress}
      />
      <View style={styles.detailBooking}>
        <Text style={styles.hotel}>{title}</Text>
        <Text style={styles.date}>
          {startDate} - {endDate}
        </Text>
      </View>
    </View>
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
    color: mainColors.white,
    fontWeight: "bold",
    fontSize: 17,
  },
  date: {
    color: mainColors.white,
    fontWeight: "400",
    fontSize: 13,
    marginTop: 5,
  },
});

export default HeaderBooking;
