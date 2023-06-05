import React from "react";
import { View, StyleSheet, Dimensions, Image, Text } from "react-native";
import mainColors from "../../utils/colors";
const { height, width } = Dimensions.get("screen");
const Slide = ({ item }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={item.image}
        style={{ height: "75%", width, resizeMode: "contain" }}
      />
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: mainColors.primary2,
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
  subtitle: {
    color: mainColors.primary3,
    fontSize: 13,
    marginHorizontal: 10,
    maxWidth: "70%",
    textAlign: "center",
    lineHeight: 23,
  },
});

export default Slide;
