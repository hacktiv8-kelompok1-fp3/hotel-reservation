import React from "react";
import { View, StyleSheet } from "react-native";
import Search from "../../components/Search";

const SearchHotel = ({ navigation }) => {
  return (
    <View>
      <Search navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchHotel;
