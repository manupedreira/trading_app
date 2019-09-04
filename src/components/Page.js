import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Colors from "trading_app/src/res/styles/colors";
import lang from "trading_app/src/res/lang/en";

const styles = StyleSheet.create({
  container: {
    alignItems: "stretch",
    width: "50%"
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    borderBottomWidth: 1,
    borderBottomColor: Colors.black
  },
  gain: {
    justifyContent: "flex-end"
  },
  header: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 20
  },
  transaction: {
    color: Colors.white,
    fontSize: 12
  },
  total: {
    flex: 1,
    paddingVertical: 4,
    paddingHorizontal: 8
  },
  price: {
    width: 75,
    paddingVertical: 4,
    paddingHorizontal: 8,
    textAlign: "center"
  },
  alignRight: {
    textAlign: "right"
  },
  lossBar: {
    height: 24,
    backgroundColor: Colors.secondary_light
  },
  gainBar: {
    height: 24,
    backgroundColor: Colors.primary_light
  },
  floating: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%"
  }
});

const Page = ({ data, maximum, loss = false }) => {
  const { book } = lang;

  return (
    <View style={styles.container}>
      {loss ? (
        <View style={styles.row}>
          <Text style={[styles.header, styles.price]}>
            {book.headers.price}
          </Text>
          <Text style={[styles.header, styles.total, styles.alignRight]}>
            {book.headers.total}
          </Text>
        </View>
      ) : (
        <View style={styles.row}>
          <Text style={[styles.header, styles.total]}>
            {book.headers.total}
          </Text>
          <Text style={[styles.header, styles.price]}>
            {book.headers.price}
          </Text>
        </View>
      )}
      {data.map(transaction =>
        loss ? (
          <View
            style={styles.row}
            key={`${transaction.join("")}${Math.random()}`}
          >
            <View
              style={[
                styles.lossBar,
                { width: `${(Math.abs(transaction[2]) * 100) / maximum}%` }
              ]}
            />
            <View style={styles.floating}>
              <Text style={[styles.transaction, styles.price]}>
                {transaction[0].toFixed(1)}
              </Text>
              <Text
                style={[styles.transaction, styles.total, styles.alignRight]}
              >
                {Math.abs(transaction[2].toFixed(2))}
              </Text>
            </View>
          </View>
        ) : (
          <View
            style={[styles.row, styles.gain]}
            key={`${transaction.join("")}${Math.random()}`}
          >
            <View
              style={[
                styles.gainBar,
                { width: `${(transaction[2] * 100) / maximum}%` }
              ]}
            />
            <View style={styles.floating}>
              <Text style={[styles.transaction, styles.total]}>
                {transaction[2].toFixed(2)}
              </Text>
              <Text style={[styles.transaction, styles.price]}>
                {transaction[0].toFixed(1)}
              </Text>
            </View>
          </View>
        )
      )}
    </View>
  );
};

export default Page;
