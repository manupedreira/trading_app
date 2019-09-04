import React from "react";
import { StatusBar, Platform } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import websocket from "trading_app/src/services/api";
import { setData } from "trading_app/src/core/trading/tradingActions";
import Colors from "trading_app/src/res/styles/colors";

import InitialLayout from "./InitialLayout";

const InitialScreen = () => {
  if (Platform.OS === "android") {
    StatusBar.setBackgroundColor(Colors.main);
  }

  const dispatch = useDispatch();

  const ws = websocket;
  ws.setData = newData => {
    dispatch(setData(newData));
  };

  React.useEffect(() => {
    return () => !!ws && ws.close();
  }, []);

  return <InitialLayout />;
};

export default InitialScreen;
