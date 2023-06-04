import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  StatusBar,
  Image,
} from "react-native";
import mainColors from "../../utils/colors";
import Icon from "react-native-vector-icons/MaterialIcons";
import Moon from "react-native-vector-icons/Ionicons";
import IconFontAwesome from "react-native-vector-icons/FontAwesome5";
import Room from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const OrderDetail = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: mainColors.primary2 }}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="rgba(0,0,0,0)"
      />
      <View style={styles.header}>
        <Icon
          name="arrow-back-ios"
          color={mainColors.white}
          size={28}
          // onPress={onPress}
        />
        <View style={styles.detailBooking}>
          <Text style={styles.hotel}>Voucher</Text>
        </View>
      </View>
      <View style={styles.count3}>
        <View style={styles.detailHotel}>
          <Image
            source={require("../../assets/hotel3.jpg")}
            style={{ width: 70, height: 70, borderRadius: 10 }}
          />
          <View style={{ justifyContent: "center", marginLeft: 20 }}>
            <Text>Hyaat Regency</Text>
            <Text style={{ marginTop: 3 }}>Superior Twin Bed</Text>
          </View>
        </View>
        <View style={styles.detailDateBoking}>
          <View>
            <Text style={{ fontSize: 13 }}>Check in</Text>
            <Text style={{ marginTop: 3 }}>Superior Twin Bed</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ justifyContent: "center" }}>
              <Moon name="moon" size={17} color={mainColors.primary3} />
            </View>
            <View style={{ justifyContent: "center", marginLeft: 5 }}>
              <Text style={{ fontSize: 17 }}>2</Text>
            </View>
          </View>
          <View>
            <Text style={{ fontSize: 13 }}>Check out</Text>
            <Text style={{ marginTop: 3 }}>Superior Twin Bed</Text>
          </View>
        </View>
        <View style={styles.detailFasility}>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <IconFontAwesome
              name="user"
              size={17}
              color={mainColors.primary2}
            />
            <Text style={{ marginLeft: 10 }}>2 Guest</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Room name="hotel" size={17} color={mainColors.primary2} />

            <Text style={{ marginLeft: 10 }}>Twin Bed</Text>
          </View>
        </View>
        <View style={styles.detailFasility}>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <MaterialCommunityIcons
              name="silverware-fork-knife"
              size={17}
              color={mainColors.primary2}
            />
            <Text style={{ marginLeft: 10 }}>Breakfast Include</Text>
          </View>
          <View style={{ flexDirection: "row", right: 10 }}>
            <Room name="hotel" size={17} color={mainColors.primary2} />

            <Text style={{ marginLeft: 10 }}>2 Room</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 40,
    marginTop: 10,
  },
  detailBooking: {
    flex: 1,
    alignItems: "center",
  },
  hotel: {
    color: mainColors.white,
    fontWeight: "bold",
    fontSize: 17,
  },
  count3: {
    flex: 1,
    backgroundColor: mainColors.white,
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
  },
  detailHotel: {
    marginTop: 20,
    flexDirection: "row",
  },
  detailDateBoking: {
    marginVertical: 40,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  detailFasility: {
    marginTop: 20,
    flexDirection: "row",
    // justifyContent: "space-between",
  },
});

export default OrderDetail;
