import { Button, SafeAreaView, View } from "react-native";
import { H1 } from "../../../src/components/theme";

export const NavBar = ({ navigation }) => {
  return (
    <SafeAreaView>
      <H1>Bonjour</H1>

      <Button title="Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Error" onPress={() => navigation.navigate("Error")} />
      <Button title="Contact" onPress={() => navigation.navigate("Contact")} />
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
};
