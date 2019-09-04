import React from "react";
import { Animated, StyleSheet } from "react-native";

import Colors from "trading_app/src/res/styles/colors";

const styles = StyleSheet.create({
  container: {
    alignItems: "stretch",
    borderTopColor: Colors.main,
    borderTopWidth: 1
  },
  subContainer: {
    alignItems: "stretch"
  }
});

const Drawer = props => {
  const [height, setHeight] = React.useState(29);

  const opacity = React.useRef(new Animated.Value(0)).current;
  const scaleY = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    const animation = [
      Animated.timing(scaleY, {
        toValue: props.expanded ? height : 0,
        duration: 250
      }),
      Animated.timing(opacity, {
        toValue: props.expanded ? 1 : 0,
        duration: 250,
        useNativeDriver: true
      })
    ];

    Animated.sequence(props.expanded ? animation : animation.reverse()).start();
  }, [props.expanded]);

  React.useEffect(() => {
    setHeight(29 + props.size * 24);
  }, [props.size]);

  return (
    <Animated.View style={[styles.container, { height: scaleY }]}>
      <Animated.View style={[styles.subContainer, { opacity }]}>
        {props.children}
      </Animated.View>
    </Animated.View>
  );
};

export default Drawer;
