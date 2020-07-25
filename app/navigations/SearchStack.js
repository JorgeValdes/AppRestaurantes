import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
//importacion de las paginas

import Search from "../Search";

const Stack = createStackNavigator();

export default function SearchStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          title: "Buscar",
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
