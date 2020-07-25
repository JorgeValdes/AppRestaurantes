import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import { firebaseApp } from "./utils/Firebase";
import * as firebase from "firebase";
//importamos la navegacion
import Navigation from "./app/navigations/Navigation";

export default function App() {
  return <Navigation></Navigation>;
}
