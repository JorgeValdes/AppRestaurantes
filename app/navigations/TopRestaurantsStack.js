import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
//importacion de las paginas

import TopRestaurants from "../TopRestaurants";

const Stack = createStackNavigator();

export default function TopRestaurantsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TopRestaurants"
        component={TopRestaurants}
        options={{
          title: "Top-5",
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
