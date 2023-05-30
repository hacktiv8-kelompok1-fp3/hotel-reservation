import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import Router from "./src/router";
import { StatusBar } from "react-native";
import mainColors from "./src/utils/colors";

function MainApp() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={mainColors.white} barStyle="dark-content" />
      <Router />
    </NavigationContainer>
  );
}

export default function App() {
  return <MainApp />;
}
