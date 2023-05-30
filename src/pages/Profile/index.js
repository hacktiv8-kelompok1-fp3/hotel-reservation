import React from 'react';
import { View, Image, Text, FlatList, StyleSheet } from 'react-native';
import { Rating } from 'react-native-elements';
import mainColors from '../../utils/colors';

const hotels = [
  {
    id: 1,
    name: 'Hotel Garden',
    location: 'Surabaya, Indonesia',
    image: require('../../assets/hotel1.jpg'),
  },
  {
    id: 2,
    name: 'Hotel Dreams',
    location: 'Jakarta, Indonesia',
    image: require('../../assets/hotel2.jpg'),
  },
  {
    id: 3,
    name: 'Hotel Flower',
    location: 'Jakarta, Indonesia',
    image: require('../../assets/hotel3.jpg'),
  },
];

const Profile = () => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.hotel}>
        <Image source={item.image} style={styles.hotelImg} />
      </View>
      <View style={styles.hotelInfo}>
        <Text style={styles.hotelName}>{item.name}</Text>
        <Text style={styles.hotelLoc}>{item.location}</Text>
        <Rating imageSize={15} readonly style={styles.hotelRate} />
      </View>
      <View style={styles.hotelInfo2}>
        <Text style={styles.hotelPrice}>$ 400</Text>
        <Text style={styles.hotelPrice2}>/night</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.containerContent}>
        <View style={styles.header}>
          <Image
            style={styles.avatar}
            source={{
              uri: 'https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg',
            }}
          />
          <View style={styles.info}>
            <Text style={styles.name}>Gordon Norman</Text>
            <Text style={styles.email}>gordonnorman@gmail.com</Text>
          </View>
        </View>

        <View style={styles.line} />

        <View style={styles.stats}>
          <View style={styles.stat}>
            <Text style={styles.statLabel}>Bookings</Text>
            <Text style={styles.statValue}>1,234</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statLabel}>Reviews</Text>
            <Text style={styles.statValue}>123</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statLabel}>Favorites</Text>
            <Text style={styles.statValue}>456</Text>
          </View>
        </View>
        <View style={styles.line} />
      </View>
      

      <FlatList
        data={hotels}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    // backgroundColor: mainColors.light2,
  },
  containerContent: {
    borderBottomColor: mainColors.dark,
    backgroundColor: mainColors.white,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 50,
    marginBottom: 15,
    paddingVertical: 20,
    width: 380,
    // borderRadius: 20,
    // elevation: 5,
  },
  header: {
    marginVertical: 20,
    marginTop: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginLeft: 10,
  },
  info: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  email: {
    color: mainColors.grey2,
    fontSize: 12,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  stats: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  stat: {
    flex: 1,
    alignItems: 'center',
  },
  statLabel: {
    color: mainColors.grey2,
    fontSize: 14,
  },
  statValue: {
    fontSize: 18,
  },

  line: {
    backgroundColor: mainColors.light3,
    marginLeft: 'auto',
    marginRight: 'auto',
    opacity: .5,
    width: 340,
    height: 1,
  },

  card: {
    flexDirection: 'row',
    backgroundColor: mainColors.white,
    paddingHorizontal: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 15,
    paddingVertical: 20,
    width: 380,
    borderRadius: 20,
    elevation: 5,
    alignItems: 'center',
  },

  hotelImg: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginLeft: 10,
  },

  hotelInfo: {
    marginLeft: 20,
    marginRight: 20,
    marginHorizontal: 'auto',
  },

  hotelName:{
    fontWeight: 'bold',
    fontSize: 16,
  },

  hotelLoc: {
    fontSize: 14,
    paddingVertical: 5,
    color: mainColors.grey2,
  },

  hotelInfo2: {
    marginHorizontal: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
  },
  hotelPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: mainColors.secondary2,
  },
  hotelPrice2: {
    fontSize: 14,
    color: mainColors.grey2,
  },
  hotelRate: {
    marginLeft: -40,
  }
});

export default Profile;