import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
//importacion de las paginas

import Account from "../Account/Account";
import Login from "../Account/Login";

const Stack = createStackNavigator();

export default function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Account"
        component={Account}
        options={{
          title: "Cuenta",
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: "Iniciar sesión",
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
