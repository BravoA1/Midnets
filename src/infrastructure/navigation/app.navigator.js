import { NavigationContainer } from "@react-navigation/native";
import { useContext } from "react";
import { StatusBar } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
// Screen
import { HomeScreen } from "../../screens/home/home.screen";
import { ContactScreen } from "../../screens/contact/contact.screen.js";
import { ErrorScreen } from "../../screens/error/error.screen.js";
import { ResultScreen } from "../../screens/result/result.screen";
import { Signout } from "../../screens/temp/Signout.js";
// Context
import { UserContext } from "../../services/user/user.context";
import { QuizNavigator } from "./quiz.navigator";
import { AuthNavigator } from "./auth.navigator";

export const AppNavigator = () => {
  const { info, user } = useContext(UserContext);

  // console.log(info, "navbar");
  // console.log(user, "navbar");

  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer
      screenOptions={{
        headerShown: false,
      }}
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
              case "QuizTheme":
                iconName = "chatbox-ellipses";
                break;
              case "Result":
                iconName = "analytics";
                break;
              default:
                iconName = "construct-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerShown: false,
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
        <Tab.Screen name="Result" component={ResultScreen} />
        {!user && <Tab.Screen name="Login" component={AuthNavigator} />}
        <Tab.Screen
          name="QuizTheme"
          component={QuizNavigator}
          options={() => ({
            unmountOnBlur: true,
          })}
        />
        {user && <Tab.Screen name="Signout" component={Signout} />}
      </Tab.Navigator>
      <StatusBar style={"auto"} backgroundColor={"black"} color={"yellow"} />
    </NavigationContainer>
  );
};
