import SkeletonPlaceholder from "react-native-skeleton-placeholder";

import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import mainColors from "../../../utils/colors";
const { width } = Dimensions.get("screen");

const Skleton = () => {
  return (
    <SkeletonPlaceholder backgroundColor={mainColors.grey1}>
      <View style={styles.card}>
        <View style={{ height: 120, width: "100%", borderRadius: 10 }} />
        <View style={styles.cardName} />
        <View style={styles.cardContent}>
          <View style={styles.cardPrice} />
          <View style={styles.cardNight} />
        </View>
        <View style={styles.cardContentLocation}>
          <View style={styles.location} />
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 230,
    // backgroundColor: mainColors.white,
    width: width / 2.1,
    marginLeft: 20,
    padding: 10,
    marginVertical: 20,
    borderRadius: 10,
  },
  cardName: {
    marginTop: 10,
  },
  cardPrice: {
    width: 20,
    height: 5,
    // fontSize: 12,
    // color: mainColors.primary2,
    // fontWeight: "700",
  },
  cardNight: {
    width: 20,
    height: 5,
  },
  cardContent: {
    flexDirection: "row",
    marginTop: 3,
  },
  cardContentLocation: {
    marginTop: 8,
  },
  location: {
    width: 20,
    height: 5,
    // fontSize: 12,
    // color: mainColors.grey1,
  },
});

export default Skleton;
