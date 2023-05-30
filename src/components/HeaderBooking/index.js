import React from "react";
import { View, StyleSheet, Text } from "react-native";
import mainColors from "../../utils/colors";
import Icon from "react-native-vector-icons/MaterialIcons";
const HeaderBooking = ({ onPress, title, startDate, endDate }) => {
  return (
    <View style={styles.header}>
      <Icon
        name="arrow-back-ios"
        color={mainColors.dark}
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
  },
  hotel: {
    color: mainColors.dark,
    fontWeight: "bold",
    fontSize: 17,
  },
  date: {
    color: mainColors.dark,
    fontWeight: "400",
    fontSize: 15,
    marginTop: 5,
  },
});

export default HeaderBooking;
