import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Logout from "react-native-vector-icons/MaterialIcons";
import mainColors from "../../utils/colors";

const List = ({ title, onPress, icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  const renderIcon = () => {
    switch (icon) {
      case "profile":
        return (
          <Icon
            name="user"
            size={25}
            style={[styles.icon, styles.profileIcon]}
          />
        );
      case "logout":
        return (
          <Logout
            name="logout"
            size={25}
            style={[styles.icon, styles.profileIcon]}
          />
        );
      default:
        return null;
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const containerStyle = [
    styles.container,
    isHovered && styles.hoveredContainer,
  ];

  return (
    <TouchableOpacity
      style={containerStyle}
      onPress={onPress}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <View style={styles.wrapper}>
        {renderIcon()}
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <Icon
          name="angle-right"
          size={24}
          style={[styles.icon, styles.angleRight]}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 25,
    paddingHorizontal: 30,
    borderBottomWidth: 1,
    borderBottomColor: mainColors.light4,
    alignItems: "center",
    justifyContent: "space-between",
  },
  hoveredContainer: {
    backgroundColor: mainColors.light3,
  },
  content: {
    flex: 1,
    marginLeft: 30,
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  angleRight: {
    color: mainColors.grey2,
  },
  profileIcon: {
    color: mainColors.secondary2,
  },
});

export default List;
