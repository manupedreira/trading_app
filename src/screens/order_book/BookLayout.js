import React from "react";
import { StyleSheet, View } from "react-native";

import { Drawer, Header, Page } from "trading_app/src/components";
import Colors from "trading_app/src/res/styles/colors";
import lang from "trading_app/src/res/lang/en";

const styles = StyleSheet.create({
  container: {
    alignItems: "stretch",
    backgroundColor: Colors.background
  },
  pageContainer: {
    flexDirection: "row",
    alignItems: "stretch"
  }
});

const BookLayout = ({ data, maximum, size }) => {
  const [expanded, setExpanded] = React.useState(false);
  const [decimals, setDecimals] = React.useState(0);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const changeDecimals = () => {
    !!decimals ? setDecimals(0) : setDecimals(1);
  };

  const { book } = lang;
  const { gain, loss } = data;

  return (
    <View style={styles.container}>
      <Header
        title={book.title}
        onExpand={toggleExpanded}
        expanded={expanded}
        precision={true}
        decimals={decimals}
        onChangeDecimals={changeDecimals}
      />
      <Drawer expanded={expanded} size={size}>
        <View style={styles.pageContainer}>
          <Page data={gain} maximum={maximum} />
          <Page data={loss} maximum={maximum} loss={true} />
        </View>
      </Drawer>
    </View>
  );
};

export default BookLayout;
