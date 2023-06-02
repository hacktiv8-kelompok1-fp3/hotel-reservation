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
} from "react-native";
import mainColors from "../../utils/colors";
import Icon from "react-native-vector-icons/Ionicons";
import { useSelector } from "react-redux";
const { width } = Dimensions.get("screen");

const MyOrder = () => {
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
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
          {history?.map((item) => (
            <View style={styles.card}>
              <View style={styles.containerOrder}>
                <Text style={styles.orderId}>ORDER ID : {item?.id}</Text>
                <Icon name="trash" size={18} color={mainColors.primary3} />
                {/* <br /> */}
              </View>
              <View style={styles.containerDesc}>
                <Image style={styles.image} source={item?.hotel?.image} />
                <View style={{ marginLeft: 20, justifyContent: "center" }}>
                  <Text style={styles.titleCard}>{item?.hotel?.name}</Text>
                  <Text style={styles.categoryCard}>SUPERIOR TWIN BED</Text>
                </View>
              </View>
              <View style={styles.conatinerPrice}>
                <Text style={styles.priceDetails}>Price Details</Text>
                <Text style={styles.priceCard}>${item?.totalBooking}</Text>
              </View>
              <View
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
                  See Voucher
                </Text>
              </View>
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
