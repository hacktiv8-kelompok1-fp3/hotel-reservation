import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";
import mainColors from "../../utils/colors";

const TabItem = ({ title, active, onPress, onLongPress }) => {
  function Icon() {
    if (title === "Home") {
      return active ? (
        <Ionicons name="home" color={mainColors.primary2} size={22} />
      ) : (
        <Ionicons name="home-outline" color={mainColors.grey1} size={22} />
      );
    }
    if (title === "Favorites") {
      return active ? (
        <Ionicons name="bookmarks" color={mainColors.primary2} size={22} />
      ) : (
        <Ionicons name="bookmarks-outline" color={mainColors.grey1} size={22} />
      );
    }
    if (title === "My Orders") {
      return active ? (
        <MaterialIcons
          name="ticket-confirmation"
          color={mainColors.primary2}
          size={22}
        />
      ) : (
        <MaterialIcons
          name="ticket-confirmation-outline"
          color={mainColors.grey1}
          size={22}
        />
      );
    }
    if (title === "Profile") {
      return active ? (
        <MaterialIcons name="account" color={mainColors.primary2} size={22} />
      ) : (
        <MaterialIcons
          name="account-outline"
          color={mainColors.grey1}
          size={22}
        />
      );
    }
  }
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  text: (active) => ({
    fontSize: 10,
    color: active ? mainColors.primary2 : mainColors.grey1,
    fontWeight: "600",
    marginTop: 4,
  }),
});

export default TabItem;
