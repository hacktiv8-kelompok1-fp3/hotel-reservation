import { View, Text, StyleSheet } from "react-native";

export default function ViewAllButton({ children }) {
  return (
    <View>
      <Text style={styles.viewAllButton}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewAllButton: {
    color: "#B36A34",
    fontWeight: "bold",
  },
});
