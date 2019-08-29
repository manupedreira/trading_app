import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View
} from "react-native";

import BookScreen from "trading_app/src/screens/order_book/BookScreen";
import Colors from "trading_app/src/res/styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.main
  },
  logo: {
    width: 92,
    height: 20,
    margin: 10
  },
  scrollview: {
    justifyContent: "flex-start",
    alignItems: "stretch",
    minHeight: "100%",
    padding: 10,
    paddingBottom: 0
  },
  widgetContainer: {
    alignItems: "stretch",
    marginBottom: 10
  }
});

const InitialLayout = ({ data }) => {
  const { book, ticker, trades } = data;

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("trading_app/src/res/assets/logo.png")}
        style={styles.logo}
      />
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.scrollview}>
        <View style={styles.widgetContainer}>
          <BookScreen data={book} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InitialLayout;
