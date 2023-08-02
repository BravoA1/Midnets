import { View, Button } from "react-native";

export const NavigationTemp = ({ navigation }) => {
  return (
    <View>
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Settings" onPress={() => navigation.navigate("Params")} />
      <Button title="Contact" onPress={() => navigation.navigate("Contact")} />
      <Button title="Error" onPress={() => navigation.navigate("Error")} />
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
      <Button
        title="QuizTheme"
        onPress={() => navigation.navigate("QuizTheme")}
      />
    </View>
  );
};
