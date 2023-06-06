import React, { useEffect, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  FlatList,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from "react-native";
import mainColors from "../../utils/colors/index.js";
import Slide from "../../components/Slide/index.js";
import { useSelector } from "react-redux";
const { height, width } = Dimensions.get("screen");

const slides = [
  {
    id: "1",
    image: require("../../assets/img1.jpeg"), //image1.png
    title: "let's start our journey",
    // subtitle:
    //   "This holiday season, make the most of every moment with us. Take pleasure in the perfect escape.",
  },
  {
    id: "2",
    image: require("../../assets/img2.jpeg"), //image2.png
    title: "Make your stay memorable",
    // subtitle:
    //   "Make the best of your vacations by getting enough rest and relaxation.",
  },
  {
    id: "3",
    image: require("../../assets/img3.jpeg"), //image3.png
    title: "Where the world comes to stay",
    // subtitle:
    //   " If you are looking for where to go and how to do it,then our hotel is the right spot for you.",
  },
];

const SplashScreen = ({ navigation }) => {
  const { token } = useSelector((state) => state.authorization);
  useEffect(() => {
    if (token) {
      navigation.replace("MainApp");
    }
  }, [token]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const ref = useRef(null);
  const updateCurrentSlideIndex = (e) => {
    const offsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(offsetX / width);
    setCurrentSlide(currentIndex);
  };
  const nextSlide = () => {
    const nextSlideIndex = currentSlide + 1;
    if (nextSlideIndex !== slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current?.scrollToOffset({ offset });
      setCurrentSlide(currentSlide + 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current?.scrollToOffset({ offset });
    setCurrentSlide(lastSlideIndex);
  };
  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.25,
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlide == index && {
                  backgroundColor: mainColors.dark,
                  width: 25,
                },
              ]}
            />
          ))}
        </View>
        <View style={{ marginBottom: 20 }}>
          {currentSlide === slides.length - 1 ? (
            <View style={{ height: 50 }}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate("Login")}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 15,
                    color: mainColors.white,
                  }}
                >
                  GET STARTED
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={skip}
                style={[
                  styles.btn,
                  {
                    backgroundColor: "transparent",
                    borderWidth: 1,
                    borderColor: mainColors.primary3,
                  },
                ]}
              >
                <Text
                  style={{
                    color: mainColors.primary3,
                    fontWeight: "bold",
                    fontSize: 15,
                  }}
                >
                  Skip
                </Text>
              </TouchableOpacity>
              <View style={{ width: 15 }} />
              <TouchableOpacity
                activeOpacity={0.8}
                style={[styles.btn]}
                onPress={nextSlide}
              >
                <Text
                  style={{
                    color: mainColors.white,
                    fontWeight: "bold",
                    fontSize: 15,
                  }}
                >
                  Next
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: mainColors.white }}>
      <StatusBar backgroundColor={mainColors.white} />
      <FlatList
        ref={ref}
        data={slides}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        pagingEnabled
        contentContainerStyle={{ height: height * 0.75 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Slide item={item} />}
      />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: mainColors.grey1,
    marginHorizontal: 3,
    borderRadius: 2,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: mainColors.primary3,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SplashScreen;
