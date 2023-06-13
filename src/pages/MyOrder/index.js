import React from "react";
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  SafeAreaView,
  Dimensions,
  Image,
  ScrollView,
  Pressable,
} from "react-native";

import mainColors from "../../utils/colors";
import Icon from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import { deleteHistoryCheckout } from "../../redux/reducer/slice-historyCheckout";
import { formatRupiah } from "../../utils/formatRupiah";
const { width } = Dimensions.get("screen");

const MyOrder = ({ navigation }) => {
  const dispatch = useDispatch();
  const { history } = useSelector((state) => state.historycheckout);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        translucent={false}
        backgroundColor={mainColors.white}
        barStyle="dark-content"
      />
      <View style={styles.header}>
        <Text style={styles.title}>My Orders</Text>
        <Icon name="newspaper-outline" size={20} color={mainColors.primary2} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {history?.map((item) => (
            <View style={styles.card} key={item?.hotel?.hotel_id}>
              <View style={styles.containerOrder}>
                <Text style={styles.orderId}>ORDER ID : {item?.id}</Text>
                <Icon
                  name="trash"
                  size={18}
                  color={mainColors.primary3}
                  onPress={() =>
                    dispatch(deleteHistoryCheckout(item.hotel.hotel_id))
                  }
                />
                {/* <br /> */}
              </View>
              <View style={styles.containerDesc}>
                <Image
                  style={styles.image}
                  source={{ uri: item?.hotel.max_photo_url }}
                />
                <View style={{ marginLeft: 20, justifyContent: "center" }}>
                  <Text style={styles.titleCard}>
                    {item?.hotel?.hotel_name}
                  </Text>
                  <Text style={styles.categoryCard}>
                    {item?.hotel?.accommodation_type_name}
                  </Text>
                </View>
              </View>
              <View style={styles.conatinerPrice}>
                <Text style={styles.priceDetails}>Price Details</Text>
                <Text style={styles.priceCard}>
                  {item.hotel.currencycode} {formatRupiah(item?.totalBooking)}
                </Text>
              </View>
              <Pressable
                onPress={() => navigation.navigate("OrderDetail", item)}
                style={{
                  borderRadius: 20,
                  backgroundColor: mainColors.primary3,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    paddingHorizontal: 30,
                    paddingVertical: 10,
                    color: mainColors.white,
                  }}
                >
                  See Orders
                </Text>
              </Pressable>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    color: mainColors.primary2,
    fontWeight: "bold",
  },
  container: {
    paddingHorizontal: 20,
  },
  card: {
    height: 230,
    width: width - 40,
    elevation: 10,
    backgroundColor: mainColors.white,
    padding: 15,
    marginVertical: 20,
    borderRadius: 20,
  },
  containerOrder: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  containerDesc: {
    flexDirection: "row",
    marginTop: 10,
  },
  conatinerPrice: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  orderId: {
    color: mainColors.grey1,
    fontSize: 13,
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 10,
  },
  titleCard: {
    color: mainColors.primary3,
    // fontWeight: "bold",
    fontSize: 15,
  },
  categoryCard: {
    marginTop: 3,
    color: mainColors.grey1,
    fontSize: 12,
  },
  priceDetails: {
    color: mainColors.grey1,
  },
  priceCard: {
    color: mainColors.primary2,
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default MyOrder;
