import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import IconQuantity from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch } from "react-redux";
import {
  handleAddSearch,
  handleDeleteSearch,
} from "../../redux/reducer/slice-search";
import mainColors from "../../utils/colors";
const GuestInputSearch = ({ title, description, count, type }) => {
  const dispatch = useDispatch();
  const handleButtonMin = () => {
    dispatch(handleDeleteSearch({ type }));
  };
  const handleButtonPlus = () => {
    dispatch(handleAddSearch({ type }));
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

export default GuestInputSearch;
