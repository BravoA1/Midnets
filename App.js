import { useContext } from "react";
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
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Appearance, Platform, SafeAreaView, StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { HomeScreen } from "./src/screens/home/home.screen.js";
import { ContactScreen } from "./src/screens/contact/contact.screen.js";
import { ErrorScreen } from "./src/screens/error/error.screen.js";
import { Login } from "./src/screens/login/login.screen.js";
import { QuizzScreen } from "./src/screens/quizz/quizz.screen.js";
import { RegisterScreen } from "./src/screens/register/register.screen";
import { PasswordForgot } from "./src/screens/passwordForgot/passwordForgot.screen";
import {
  UserContext,
  UserContextProvider,
} from "./src/services/user/user.context";
import { NavBar } from "./src/screens/NavBar/navBar.screen";

const Stack = createNativeStackNavigator();
const isAndroid = Platform.OS === "android";

export default function AppChildren() {
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

  const Tab = createBottomTabNavigator();

  // const Back = () => <Text>Retour en arrière</Text>;
  // const Notifications = () => <Text>Notifications</Text>;

  return (
    <UserContextProvider>
      <ThemeProvider theme={theme}>
        <NavBar />
      </ThemeProvider>
    </UserContextProvider>
  );
}
