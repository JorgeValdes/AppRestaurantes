import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
//importacion de las paginas

import Restaurants from "../Restaurants";

const Stack = createStackNavigator();

export default function RestaurantsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Restaurants"
        component={Restaurants}
        options={{
          title: "Restaurantes",
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
