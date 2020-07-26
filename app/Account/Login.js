import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import { Divider } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <Image
        source={require("../../assets/img/5-tenedores-letras-icono-logo.png")}
        resizeMode="contain"
        style={styles.logo}
      ></Image>
      <View style={styles.container}>
        <Text>Login Form</Text>
        <CreateAccount></CreateAccount>
      </View>
      <Divider style={styles.Divider}></Divider>
      <Text>Social Login</Text>
    </ScrollView>
  );
}

function CreateAccount() {
  const navigation = useNavigation();
  return (
    <Text style={styles.textRegister}>
      ¿Aun no tienes una cuenta?{" "}
      <Text
        style={styles.btnregister}
        onPress={() => navigation.navigate("Register")}
      >
        Registrate
      </Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 150,
    width: "100%",
    marginTop: 20,
  },
  container: {
    marginRight: 40,
    marginLeft: 40,
  },
  textRegister: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  btnregister: {
    color: "red",
    fontWeight: "bold",
  },
  Divider: {
    backgroundColor: "red",
    margin: 40,
  },
});
