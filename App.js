/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { Platform, StatusBar } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";

import configureStore from "trading_app/src/app/store";
import InitialScreen from "trading_app/src/screens/initial/InitialScreen";
import SplashLayout from "trading_app/src/screens/splash/SplashLayout";
import Colors from "trading_app/src/res/styles/colors";

let store, persistor;

const App = () => {
  const [isBooted, setBooted] = React.useState(false);

  const setStoreLoaded = () => setTimeout(() => setBooted(true), 2000);

  React.useEffect(() => {
    const initializeStore = async () => {
      if (store !== undefined) return setStoreLoaded();

      ({ store, persistor } = configureStore());
      return setStoreLoaded();
    };

    initializeStore();
  }, []);

  if (Platform.OS === "android") {
    StatusBar.setBackgroundColor(Colors.background);
  }

  switch (isBooted) {
    case false:
      return <SplashLayout />;
    default:
      return (
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <InitialScreen />
          </PersistGate>
        </Provider>
      );
  }
};

export default App;
