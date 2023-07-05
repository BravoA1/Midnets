import React from "react";
import { theme } from "./src/infrastructure/theme";
import { ThemeProvider } from "styled-components/native";
import { useFonts as useLora, Lora_400Regular } from "@expo-google-fonts/lora";
import {
  useFonts as useAlata,
  Alata_400Regular,
} from "@expo-google-fonts/alata";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Appearance, SafeAreaView, StatusBar } from "react-native";

import { HomeScreen } from "./src/screens/home/home.screen.js";
import { ContactScreen } from "./src/screens/contact/contact.screen.js";
import { ErrorScreen } from "./src/screens/error/error.screen.js";
import { Login } from "./src/screens/login/login.screen.js";
import { PasswordForgot } from "./src/screens/passwordForgot/passwordForgot.screen.js";
import { RegisterScreen } from "./src/screens/register/register.screen";

const Stack = createNativeStackNavigator();

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

  // console.log(Appearance.getColorScheme());

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
          <Stack.Screen name="ForgotPassword" component={PasswordForgot} />
          <Stack.Screen name="Error" component={ErrorScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
        <StatusBar style={"auto"} backgroundColor={"black"} color={"yellow"} />
      </NavigationContainer>
    </ThemeProvider>
  );
}
