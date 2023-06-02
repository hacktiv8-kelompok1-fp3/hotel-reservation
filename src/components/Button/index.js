import { View, Text, StyleSheet, Pressable } from "react-native";

export default function Button({ children }) {
  return (
    <Pressable onPress={() => {}}>
      <View>
        <Text style={styles.container}>{children}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#595CEB",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
    color: "white",
    fontWeight: "bold",
  },
});
