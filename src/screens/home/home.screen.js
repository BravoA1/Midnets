import { Button, SafeAreaView, View } from "react-native";

export const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Button title="error" onPress={() => navigation.navigate("Error")} />
      <Button title="contact" onPress={() => navigation.navigate("Contact")} />
    </SafeAreaView>
  );
};
