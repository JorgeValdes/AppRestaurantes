import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native"; //funcion prinicipal para nuestras pantallas
import {
  createBottomTab,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs"; //funcion para crear tabs para nuestras pantalla

import { Icon } from "react-native-elements";
//import Restaurants from "../Restaurants";
import AccountStack from "../navigations/AccountStack";
import FavoritesStack from "../navigations/FavoritesStack";
import RestaurantsStack from "../navigations/RestaurantsStack";
import SearchStack from "./SearchStack";
import TopRestaurantsStack from "./TopRestaurantsStack";

/* import Favorites from "../Favorites";
import TopRestaurants from "../TopRestaurants";
import Search from "../Search";
import Account from "../Account"; */

const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Account"
        //tabBarOptions
        tabBarOptions={{
          inactiveTintColor: "#646464",
          activeTintColor: "red",
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color),
        })}
      >
        <Tab.Screen name="Restaurants" component={RestaurantsStack} />
        <Tab.Screen name="Favorites" component={FavoritesStack} />
        <Tab.Screen name="TopRestaurants" component={TopRestaurantsStack} />
        <Tab.Screen name="Search" component={SearchStack} />
        <Tab.Screen name="Account" component={AccountStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;

function screenOptions(route, color) {
  let iconName;
  switch (route.name) {
    case "Restaurants":
      iconName = "compass-outline";
      break;
    case "Favorites":
      iconName = "heart-outline";
      break;
    case "TopRestaurants":
      iconName = "star-outline";
      break;
    case "Search":
      iconName = "magnify";
      break;
    case "Account":
      iconName = "account-outline";
      break;
  }

  return (
    <Icon
      type="material-community"
      name={iconName}
      size={22}
      color={color}
    ></Icon>
  );
}
