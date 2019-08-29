import React from "react";
import { Animated, StyleSheet, View } from "react-native";

import Colors from "trading_app/src/res/styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: Colors.background
  },
  logo: {
    width: "60%",
    resizeMode: "contain"
  }
});

const SplashLayout = () => {
  const useOpacity = () => {
    const animOpacity = React.useRef(new Animated.Value(0)).current;

    React.useEffect(() => {
      const toggleOpacity = (toggleIn = true) => {
        Animated.timing(animOpacity, {
          toValue: toggleIn ? 1 : 0,
          duration: 500,
          useNativeDriver: true
        }).start();
      };

      toggleOpacity();
      setTimeout(() => toggleOpacity(false), 2000);
    }, [animOpacity]);

    return animOpacity;
  };

  const opacity = useOpacity();

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("trading_app/src/res/assets/logo.png")}
        style={[styles.logo, { opacity }]}
      />
    </View>
  );
};

export default SplashLayout;
