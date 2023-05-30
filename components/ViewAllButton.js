import { View, Text, StyleSheet, Pressable } from "react-native";

export default function ViewAllButton({ children }) {
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
    color: "#B36A34",
    fontWeight: "bold",
  },
});
