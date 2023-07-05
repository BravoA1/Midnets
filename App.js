import React from "react";
import { ContactScreen } from "./src/screens/contact/contact.screen.js";
import { ErrorScreen } from "./src/screens/error/error.screen.js";
import { theme } from "./src/infrastructure/theme";
import { ThemeProvider } from "styled-components/native";
import { useFonts as useLora, Lora_400Regular } from "@expo-google-fonts/lora";
import {
  useFonts as useAlata,
  Alata_400Regular,
} from "@expo-google-fonts/alata";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./src/screens/home/home.screen.js";
import { Appearance, SafeAreaView, StatusBar } from "react-native";

const Stack = createNativeStackNavigator();
import Login from "./src/screens/login/login.screen.js";
import PasswordForgot from "./src/screens/passwordForgot/passwordForgot.screen.js";

export default function App() {
  const [loraLoader] = useLora({
    Lora_400Regular,
  });
  const [alataLoader] = useAlata({
    Alata_400Regular,
  });

  if (!loraLoader || !alataLoader) {
    return null;
  }

  console.log(Appearance.getColorScheme());

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Contact" component={ContactScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="mots de passe oublié" component={PasswordForgot} />
          <Stack.Screen name="Error" component={ErrorScreen} />
        </Stack.Navigator>
        <StatusBar style={"auto"} backgroundColor={"black"} color={"yellow"} />
      </NavigationContainer>
    </ThemeProvider>
  );
}
