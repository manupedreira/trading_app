import React from "react";
import { StatusBar, Platform } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { getData } from "trading_app/src/core/trading/tradingActions";
import Colors from "trading_app/src/res/styles/colors";

import InitialLayout from "./InitialLayout";

const InitialScreen = () => {
  if (Platform.OS === "android") {
    StatusBar.setBackgroundColor(Colors.main);
  }

  const dispatch = useDispatch();
  const data = useSelector(state => state.trading);

  React.useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return <InitialLayout data={data} />;
};

export default InitialScreen;
