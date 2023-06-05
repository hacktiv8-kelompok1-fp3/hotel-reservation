import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import mainColors from "../../utils/colors";
import IconQuantity from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch, useSelector } from "react-redux";
import { handleAdd, handleDelete } from "../../redux/reducer/slice-bookingData";
const GuestInput = ({ title, description, count, type }) => {
  const dispatch = useDispatch();
  const handleButtonMin = () => {
    dispatch(handleDelete({ type }));
  };
  const handleButtonPlus = () => {
    dispatch(handleAdd({ type }));
  };
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
        {count <= 0 ? (
          <Pressable style={styles.quantityBtn} disabled>
            <IconQuantity name="minus" size={20} color={mainColors.white} />
          </Pressable>
        ) : (
          <Pressable style={styles.quantityBtn} onPress={handleButtonMin}>
            <IconQuantity name="minus" size={20} color={mainColors.white} />
          </Pressable>
        )}
        <Text style={{ fontWeight: "bold" }}>{count}</Text>
        <Pressable style={styles.quantityBtn} onPress={handleButtonPlus}>
          <IconQuantity name="plus" size={20} color={mainColors.white} />
        </Pressable>
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
    height: 30,
    width: 30,
    borderRadius: 7,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: mainColors.primary3,
  },
});

export default GuestInput;
