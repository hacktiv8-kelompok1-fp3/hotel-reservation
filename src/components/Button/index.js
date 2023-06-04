import { View, Text, StyleSheet, Pressable } from "react-native";
import mainColors from "../../utils/colors";

export default function Button({ children, navigation, data }) {
  return (
    <Pressable onPress={() => navigation.navigate("Booking", data)}>
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
