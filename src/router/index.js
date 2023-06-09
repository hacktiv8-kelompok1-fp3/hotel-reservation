import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DetailHotel from "../pages/DetailHotel";
import Booking from "../pages/Booking";
import ButtomNavigator from "../components/ButtomNavigator";
import Home from "../pages/Home";
import MyOrder from "../pages/MyOrder";
import Favorites from "../pages/Favorites";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import SplashScreen from "../pages/SplashScreen";
import OrderDetail from "../pages/OrderDetail";
import ContactInformation from "../pages/ContactInformation";
import UpdateProfile from "../pages/UpdateProfile";
import SearchHotel from "../pages/SearchHotel";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainApp() {
  return (
    <Tab.Navigator tabBar={(props) => <ButtomNavigator {...props} />}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="My Orders"
        component={MyOrder}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

export default function Router() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SearchHotel"
        component={SearchHotel}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DetailHotel"
        component={DetailHotel}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Booking"
        component={Booking}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ContactInformation"
        component={ContactInformation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OrderDetail"
        component={OrderDetail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UpdateProfile"
        component={UpdateProfile}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
