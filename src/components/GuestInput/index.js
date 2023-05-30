import React from "react";
import { View, StyleSheet, Text } from "react-native";
import mainColors from "../../utils/colors";
import IconQuantity from "react-native-vector-icons/MaterialCommunityIcons";
const GuestInput = ({ title, description, count, onPress }) => {
  return (
    <View
      style={{
        marginVertical: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: mainColors.light1,
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 15,
      }}
    >
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.quantityContainer}>
        <View style={styles.quantityBtn}>
          <IconQuantity name="minus" size={20} />
        </View>
        <Text style={{ fontWeight: "bold" }}>{count}</Text>
        <View style={styles.quantityBtn}>
          <IconQuantity name="plus" size={20} onPress={onPress} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: mainColors.primary2,
    fontWeight: "600",
    fontSize: 15,
  },
  description: {
    color: mainColors.grey1,
    fontSize: 12,
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
});

export default GuestInput;
