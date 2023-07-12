import React from "react";
import { theme } from "./src/infrastructure/theme";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts as useLora,
  Lora_400Regular,
  Lora_700Bold,
  Lora_600SemiBold,
} from "@expo-google-fonts/lora";
import {
  useFonts as useAlata,
  Alata_400Regular,
} from "@expo-google-fonts/alata";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Appearance, Platform, SafeAreaView, StatusBar } from "react-native";

import { HomeScreen } from "./src/screens/home/home.screen.js";
import { ContactScreen } from "./src/screens/contact/contact.screen.js";
import { ErrorScreen } from "./src/screens/error/error.screen.js";
import { Login } from "./src/screens/login/login.screen.js";
import { PasswordForgot } from "./src/screens/passwordForgot/passwordForgot.screen.js";
import { RegisterScreen } from "./src/screens/register/register.screen";
import { NavBar } from "./src/screens/NavBar/navBar.screen";
import { QuizzScreen } from "./src/screens/quizz/quizz.screen";

const Stack = createNativeStackNavigator();
const isAndroid = Platform.OS === "android";

export default function App() {
  const [loraLoader] = useLora({
    Lora_400Regular,
    Lora_600SemiBold,
    Lora_700Bold,
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
        <Stack.Navigator
          screenOptions={{ headerShown: isAndroid ? false : true }}
        >
          <Stack.Screen name="NavBar" component={NavBar} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Contact" component={ContactScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="PasswordForgot" component={PasswordForgot} />
          <Stack.Screen name="Error" component={ErrorScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Quizz" component={QuizzScreen} />
        </Stack.Navigator>
        <StatusBar style={"auto"} backgroundColor={"black"} color={"yellow"} />
      </NavigationContainer>
    </ThemeProvider>
  );
}
