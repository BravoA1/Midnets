import { Button, View } from "react-native";

export const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button title="error" onPress={() => navigation.navigate("Error")} />
      <Button title="contact" onPress={() => navigation.navigate("Contact")} />
    </View>
  );
};
