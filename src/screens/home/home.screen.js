import { Button, SafeAreaView, View } from "react-native";

export const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
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
    </SafeAreaView>
  );
};
