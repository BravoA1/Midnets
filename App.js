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

  const Tab = createBottomTabNavigator();

  const Back = () => <Text>Retour en arrière</Text>;
  const Notifications = () => <Text>Notifications</Text>;

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer
      // screenOptions={{
      //   headerShown: false,
      // }}
      >
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
              /* Futur Logo a utilisé  */
              // if (route.name === "Back") {
              //   iconName = "chevron-back";
              // } else if (route.name === "Home") {
              //   iconName = "home";
              // } else if (route.name === "Notifications") {
              //   iconName = "notifications";
              // } else if (route.name === "Menu") {
              //   iconName = "menu";
              // }
              switch (route.name) {
                case "Home":
                  iconName = "home";
                  break;
                case "Contact":
                  iconName = "call";
                  break;
                case "Error":
                  iconName = "stop-circle";
                  break;
                case "Login":
                  iconName = "man";
                  break;
                case "Quizz":
                  iconName = "chatbox-ellipses";
                  break;
                default:
                  iconName = "construct-outline";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
        >
          {/*Futur screen a ajouté */
          /* <Tab.Screen name="Back" component={Back} />
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Notifications" component={Notifications} />
        <Tab.Screen name="Menu" component={MenuScreen} /> */}

          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Contact" component={ContactScreen} />
          <Tab.Screen name="Error" component={ErrorScreen} />
          <Tab.Screen name="Login" component={Login} />
          <Tab.Screen name="Quizz" component={QuizzScreen} />
          <Tab.Screen
            name="Register"
            component={RegisterScreen}
            options={{ tabBarItemStyle: { display: "none" } }}
          />
          <Tab.Screen
            name="ForgotPswd"
            component={PasswordForgot}
            options={{ tabBarItemStyle: { display: "none" } }}
          />
        </Tab.Navigator>
        <StatusBar style={"auto"} backgroundColor={"black"} color={"yellow"} />
      </NavigationContainer>
    </ThemeProvider>
  );
}
