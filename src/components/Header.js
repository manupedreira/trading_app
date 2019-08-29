import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Colors from "trading_app/src/res/styles/colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
    height: 32
  },
  subContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  arrow: {
    width: 12,
    height: 12
  },
  title: {
    paddingLeft: 8,
    color: Colors.white,
    fontSize: 16,
    fontWeight: "bold"
  },
  button: {
    paddingHorizontal: 8,
    color: Colors.white,
    fontSize: 24,
    fontWeight: "900"
  },
  disabled: {
    opacity: 0.5
  }
});

const Header = ({
  title,
  onExpand,
  expanded = false,
  precision = false,
  decimals = 0,
  onChangeDecimals = () => {}
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.subContainer, { padding: 8 }]}
        onPress={onExpand}
      >
        <Image
          source={
            expanded
              ? require("trading_app/src/res/assets/arrow_down.png")
              : require("trading_app/src/res/assets/arrow_right.png")
          }
          style={styles.arrow}
        />
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
      {precision && decimals === 0 && (
        <View style={styles.subContainer}>
          <Text style={[styles.button, styles.disabled]}>-</Text>
          <TouchableOpacity onPress={onChangeDecimals}>
            <Text style={styles.button}>+</Text>
          </TouchableOpacity>
        </View>
      )}
      {precision && decimals === 1 && (
        <View style={styles.subContainer}>
          <TouchableOpacity onPress={onChangeDecimals}>
            <Text style={styles.button}>-</Text>
          </TouchableOpacity>
          <Text style={[styles.button, styles.disabled]}>+</Text>
        </View>
      )}
    </View>
  );
};

export default Header;
