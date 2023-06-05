import { View, Text, StyleSheet, Pressable } from "react-native";
import mainColors from "../../utils/colors";
import { addDetailHotel } from "../../redux/reducer/slice-bookingData";
import { useDispatch } from "react-redux";

export default function Button({ children, navigation, data }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addDetailHotel(data));
    navigation.navigate("ContactInformation");
  };
  return (
    <Pressable onPress={handleClick}>
      <View>
        <Text style={styles.container}>{children}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: mainColors.primary2,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
    color: "white",
    fontWeight: "bold",
  },
});
