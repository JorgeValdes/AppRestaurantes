import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import RegisterForm from "../components/Account/RegisterForm";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function Register() {
  return (
    <KeyboardAwareScrollView>
      <Image
        source={require("../../assets/img/5-tenedores-letras-icono-logo.png")}
        resizeMode="contain"
        style={styles.logo}
      ></Image>
      <View style={styles.viewForm}>
        <RegisterForm></RegisterForm>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 150,
    marginTop: 20,
  },
  viewForm: {
    marginRight: 40,
    marginLeft: 40,
  },
});
