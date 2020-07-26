import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import { validateEmail } from "../../../utils/Validations";
import { size, isEmpty } from "lodash";

export default function RegisterForm() {
  const [showPassword, setshowPassword] = useState(false);
  const [showRepeatPassword, setshowRepeatPassword] = useState(false);
  const [formData, setformData] = useState(defaultFormValue);

  const onSubmit = () => {
    console.log(formData);
    console.log(validateEmail(formData.email));
    if (
      isEmpty(formData.email) ||
      isEmpty(formData.password) ||
      isEmpty(formData.repeatpassword)
    ) {
      console.log("todos los campos son obligatorios");
    } else if (!validateEmail(formData.email)) {
      console.log("El email no es correcto");
    } else if (formData.password !== formData.repeatpassword) {
      console.log("Las contraseñas tiene que ser iguales");
    } else if (size(formData.password) && size(formData.repeatpassword) < 6) {
      console.log("La Contraseña tiene que ser min de 6 caracteres");
    } else {
      console.log("ok");
    }
  };

  const onChange = (e, type) => {
    /*  console.log(e.nativeEvent.text);
    setformData({
      
    }); */
    setformData({
      ...formData,
      [type]: e.nativeEvent.text,
    });
  };
  return (
    <View style={styles.formContainer}>
      <Input
        placeholder="Correo electronico"
        containerStyle={styles.inputform}
        onChange={(e) => onChange(e, "email")}
        rightIcon={
          <Icon
            type="material-community"
            name="email"
            iconStyle={styles.iconStyle}
          ></Icon>
        }
      ></Input>
      <Input
        placeholder="Contraseña"
        containerStyle={styles.inputform}
        secureTextEntry={showPassword ? false : true}
        onChange={(e) => onChange(e, "password")}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.iconStyle}
            onPress={() => setshowPassword(!showPassword)}
          ></Icon>
        }
      ></Input>
      <Input
        placeholder="Repetir Contraseña"
        containerStyle={styles.inputform}
        secureTextEntry={showRepeatPassword ? false : true}
        onChange={(e) => onChange(e, "repeatpassword")}
        rightIcon={
          <Icon
            type="material-community"
            name={showRepeatPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.iconStyle}
            onPress={() => setshowRepeatPassword(!showRepeatPassword)}
          ></Icon>
        }
      ></Input>
      <Button
        title="Unirse"
        containerStyle={styles.containerStyle}
        buttonStyle={styles.btnregister}
        onPress={() => onSubmit()}
      ></Button>
    </View>
  );
}

function defaultFormValue() {
  return {
    email: "",
    password: "",
    repeatpassword: "",
  };
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  inputform: {
    width: "100%",
    marginTop: 20,
  },
  containerStyle: {
    width: "95%",
  },
  btnregister: {
    backgroundColor: "red",
    marginTop: 20,
  },
  iconStyle: {
    color: "gray",
  },
});
