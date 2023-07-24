import { createContext, useEffect, useState } from "react";
import { firebase } from "../../../config";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [info, setInfo] = useState({ email: "", password: "" });

  function onAuthStateChanged(user) {
    setUser(user);
  }
  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, [children]);

  useEffect(() => {
    if (user) {
      firebase
        .firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then((snapshot) => {
          if (snapshot.exists) {
            setInfo(snapshot.data());
          } else {
            setInfo({ email: "", password: "" });
          }
        });
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, info }}>
      {children}
    </UserContext.Provider>
  );
};
