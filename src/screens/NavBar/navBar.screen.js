import {
  Button,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { H1 } from "../../../src/components/theme";
import { useEffect, useState } from "react";
import { firebase } from "../../../config";
import ButtonGradient from "../../components/ButtonGradient";

export const NavBar = ({ navigation }) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [name, setName] = useState();

  // Handle user state change
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);

    return subscriber;
  }, []);

  useEffect(() => {
    if (user) {
      console.log("in");
      firebase
        .firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then((snapshot) => {
          if (snapshot.exists) {
            setName(snapshot.data());
          } else {
            console.log("User does not exist");
          }
        });
    }
  }, [user]);

  useEffect(() => {
    console.log({ name });
  }, [name]);

  if (initializing) return null;

  if (!user) {
    return (
      <SafeAreaView>
        <H1>Bonjour</H1>

        <Button title="Home" onPress={() => navigation.navigate("Home")} />
        <Button title="Error" onPress={() => navigation.navigate("Error")} />
        <Button
          title="Contact"
          onPress={() => navigation.navigate("Contact")}
        />
        <Button
          title="Forgot Password"
          onPress={() => navigation.navigate("PasswordForgot")}
        />
        <Button title="Login" onPress={() => navigation.navigate("Login")} />
        <Button
          title="Register"
          onPress={() => navigation.navigate("Register")}
        />
        <Button title="Quizz" onPress={() => navigation.navigate("Quizz")} />
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView>
        <H1>Bonjour {name && name.name}</H1>

        <Button title="Home" onPress={() => navigation.navigate("Home")} />
        <Button title="Error" onPress={() => navigation.navigate("Error")} />
        <Button
          title="Contact"
          onPress={() => navigation.navigate("Contact")}
        />

        <Button title="Quizz" onPress={() => navigation.navigate("Quizz")} />
        <View style={{ alignItems: "center", marginTop: 30 }}>
          <ButtonGradient
            OnPress={() => {
              firebase.auth().signOut();
              setName("");
            }}
          >
            <Text>Sign out</Text>
          </ButtonGradient>
        </View>
      </SafeAreaView>
    );
  }
};
