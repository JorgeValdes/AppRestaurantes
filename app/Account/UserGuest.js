import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
export default function UserGuest() {
  const navigation = useNavigation();
  //console.log(navigation);
  return (
    <ScrollView centerContent="true" style={styles.ViewBody}>
      <Image
        style={styles.Image}
        source={require("../../assets/img/user-guest.jpg")}
        resizeMode="contain"
      ></Image>
      <Text style={styles.title}>Consulta tu perfil de AppRestaurantes</Text>
      <Text style={styles.description}>
        ¿Como describiras tu mejor restaurantes? Busca y visualiza los mejores
        restaurantes de una forma sencilla , vota cual te ha gustado más y
        comenta como ha sido tu experiencia
      </Text>
      <View style={styles.viewbtn}>
        <Button
          title="Ve tu Perfil"
          buttonStyle={styles.buttonStyle}
          containerStyle={styles.containerStyle}
          onPress={() => navigation.navigate("Login")}
        ></Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  ViewBody: {
    marginLeft: 30,
    marginRight: 30,
  },
  Image: {
    height: 300,
    width: "100%",
    marginBottom: 40,
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    marginBottom: 20,
  },
  viewbtn: {
    alignItems: "center",
  },
  buttonStyle: {
    backgroundColor: "red",
  },

  containerStyle: {
    width: "70%",
  },
});
