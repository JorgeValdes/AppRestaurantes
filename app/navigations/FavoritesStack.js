import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
//importacion de las paginas

import Favorites from "../Favorites";

const Stack = createStackNavigator();

export default function FavoritesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{
          title: "Favoritos",
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
