import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import Router from "./src/router";
import { StatusBar } from "react-native";
import mainColors from "./src/utils/colors";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import Profile from "./src/pages/Profile";

function MainApp() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={mainColors.white} barStyle="dark-content" />
      <Router />
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <Profile />
    </Provider>
  );
}
