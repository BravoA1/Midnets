import { NavigationContainer } from "@react-navigation/native";
import { useContext } from "react";
import { StatusBar } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { HomeScreen } from "../home/home.screen.js";
import { ContactScreen } from "../contact/contact.screen.js";
import { ErrorScreen } from "../error/error.screen.js";
import { Login } from "../login/login.screen.js";
import { QuizzScreen } from "../quizz/quizz.screen.js";
import { RegisterScreen } from "../register/register.screen";
import { PasswordForgot } from "../passwordForgot/passwordForgot.screen";
import { Signout } from "../temp/Signout.js";
import { UserContext } from "../../services/user/user.context.js";
import { QuizContextProvider } from "../../services/quiz/quiz.context.js";
import { ThemeScreen } from "../quizz/theme.screen.js";
import { RulesScreen } from "../quizz/rules.screen.js";

export const NavBar = ({ navigation }) => {
  const { info, user } = useContext(UserContext);

  // console.log(info, "navbar");
  // console.log(user, "navbar");

  const QuizParent = () => (
    <QuizContextProvider>
      <QuizzScreen />
    </QuizContextProvider>
  );

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
              case "QuizzTheme":
                iconName = "chatbox-ellipses";
                break;
              default:
                iconName = "construct-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerShown: false,
          // unmountOnBlur: true,
          // lazy: true,
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
        {!user && <Tab.Screen name="Login" component={Login} />}
        <Tab.Screen name="QuizzTheme" component={RulesScreen} />
        <Tab.Screen
          name="Quizz"
          component={QuizParent}
          options={() => ({
            tabBarButton: () => null,
            unmountOnBlur: true,
          })}
        />
        {user && <Tab.Screen name="Signout" component={Signout} />}
        <Tab.Screen
          name="Register"
          component={RegisterScreen}
          options={() => ({
            tabBarButton: () => null,
          })}
        />
        <Tab.Screen
          name="ForgotPswd"
          component={PasswordForgot}
          options={() => ({
            tabBarButton: () => null,
          })}
        />
      </Tab.Navigator>
      <StatusBar style={"auto"} backgroundColor={"black"} color={"yellow"} />
    </NavigationContainer>
  );
};
