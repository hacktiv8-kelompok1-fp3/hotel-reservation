import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import mainColors from '../../utils/colors';
import List from '../../components/List';

const ProfileInfo = () => {
  return (
    <View style={styles.profileContainer}>
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri:
              'https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/300w/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg',
          }}
          style={styles.avatar}
        />
      </View>
      <View style={{ height: 10 }}></View>
      <Text style={styles.name}>Gordon Norman</Text>
      <Text style={styles.email}>gordonnorman@gmail.com</Text>
    </View>
  );
};

const Profile = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        {/* <TouchableOpacity style={styles.backButton}>
          <Image source={require('../../assets/icons/arrow-back-8.png')} size={24} color="black" style={styles.backIcon} />
        </TouchableOpacity> */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Profile</Text>
        </View>
      </View>
      <ProfileInfo />
      <View style={{ height: 20 }}></View>
      <List title="Edit Profile" icon="profile" />
      <List title="Language" icon="language" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  avatarContainer: {
    borderRadius: 60,
    borderWidth: 2,
    borderColor: mainColors.light4, 
    
    padding: 8, 
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 60,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 18,
    color: mainColors.grey2,
  },
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  backButton: {
    padding: 8,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Profile;
