import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";

import { Overlay } from "react-native-elements";

export default function Loading(props) {
  const { isVisible, text } = props;

  return (
    <Overlay
      isVisible={isVisible}
      windowBackgroundColor="rgba(255, 255, 255, .5)"
      overlayBackgroundColor="transparent"
      overlayStyle={styles.overlay}
    >
      <View style={styles.View}>
        <ActivityIndicator size="large" color="red"></ActivityIndicator>
        {text && <Text style={styles.text}>{text}</Text>}
      </View>
    </Overlay>
  );
}

const styles = StyleSheet.create({
  overlay: {
    height: 100,
    width: 200,
    backgroundColor: "#fff",
    borderColor: "red",
    borderWidth: 2,
    borderRadius: 10,
  },
  View: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "red",
    textTransform: "uppercase",
    marginTop: 10,
  },
});
