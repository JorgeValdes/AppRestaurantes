import React, { useState, useEffect } from "react";
import * as firebase from "firebase";

import UserGuest from "../Account/UserGuest";
import UserLogged from "../Account/UserLogged";

//incoporar el spiner

import Loading from "../components/Loading";
export default function Account() {
  const [login, setLogin] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log("estado del usuario : ", user);
      !user ? setLogin(false) : setLogin(true);
    });
  }, []);

  if (login === null) {
    return <Loading isVisible={true} text="cargando"></Loading>;
  }

  return login ? <UserLogged></UserLogged> : <UserGuest></UserGuest>;
}
