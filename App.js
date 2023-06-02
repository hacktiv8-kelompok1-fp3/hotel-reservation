import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import Router from "./src/router";
import { persistStore } from "redux-persist";
import { StatusBar } from "react-native";
import mainColors from "./src/utils/colors";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { PersistGate } from "redux-persist/integration/react";

function MainApp() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={mainColors.white} barStyle="dark-content" />
      <Router />
    </NavigationContainer>
  );
}

export default function App() {
  const persist = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate persistor={persist}>
        <MainApp />
      </PersistGate>
    </Provider>
  );
}
