import { NavigationContainer } from "@react-navigation/native";
import { useContext } from "react";
import { PushNotificationIOS, StatusBar } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
// Screen
import { HomeScreen } from "../../screens/home/home.screen";
import { ContactScreen } from "../../screens/contact/contact.screen.js";
import { ErrorScreen } from "../../screens/error/error.screen.js";
import { Signout } from "../../screens/temp/Signout.js";
// Context
import { UserContext } from "../../services/user/user.context";
import { QuizNavigator } from "./quiz.navigator";
import { AuthNavigator } from "./auth.navigator";
import { PortraitsScreen } from "../../screens/Portraits/portrait.screen";
import { PortraitNavigator } from "./portrait.navigator";
import { AccessibilityScreen } from "../../screens/options/accessibility.screen";
import { NavigationTemp } from "../../screens/Navigation/NavigationTemp";
import { CardPortrait } from "../../components/CardPortrait";
import { NotificationApp } from "../../screens/notification/notification.screen.js";
import { TopNavigation } from "../../components/topNavigation";
import { ForumNavigator } from "./forum.navigator";
import { Forum } from "../../screens/forum/forum.screen";
import { RulesScreen } from "../../screens/quizz/rules.screen";
import Params from "../../screens/Params/Params.screen";

export const AppNavigator = () => {
  const { info, user } = useContext(UserContext);

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
            switch (route.name) {
              case "Home":
                iconName = "home-sharp";
                break;
              case "Notification":
                iconName = "notifications-sharp";
                break;
              case "Settings":
                iconName = "options-sharp";
                break;
              case "Back":
                iconName = "chevron-back";
                break;
              default:
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerShown: false,
          unmountOnBlur: true,
        })}
      >
        <Tab.Screen
          options={() => ({
            tabBarButton: () => null,
            title: () => null,
          })}
          name="Parent"
          component={HomeScreen}
        />

        <Tab.Screen
          options={() => ({
            title: () => null,
          })}
          name="Back"
          component={NavigationTemp}
        />

        <Tab.Screen
          options={() => ({
            title: () => null,
          })}
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen
          options={() => ({
            title: () => null,
          })}
          name="Notification"
          component={NotificationApp}
        />
        <Tab.Screen
          options={() => ({
            title: () => null,
          })}
          name="Settings"
          component={AccessibilityScreen}
        />
        <Tab.Screen
          options={() => ({
            tabBarButton: () => null,
          })}
          name="Contact"
          component={ContactScreen}
        />
        <Tab.Screen
          options={() => ({
            tabBarButton: () => null,
          })}
          name="Error"
          component={ErrorScreen}
        />
        <Tab.Screen
          options={() => ({
            tabBarButton: () => null,
          })}
          name="TopNavigation"
          component={TopNavigation}
        />
        <Tab.Screen
          options={() => ({
            tabBarButton: () => null,
          })}
          name="Portrait"
          component={PortraitNavigator}
        />
        <Tab.Screen
          options={() => ({
            tabBarButton: () => null,
          })}
          name="Forum"
          component={Forum}
        />
        <Tab.Screen
          options={() => ({
            tabBarButton: () => null,
          })}
          name="Params"
          component={Params}
        />
        {!user && (
          <Tab.Screen
            options={() => ({
              tabBarButton: () => null,
            })}
            name="Login"
            component={AuthNavigator}
          />
        )}
        {user && <Tab.Screen name="Signout" component={Signout} />}
        <Tab.Screen
          name="QuizTheme"
          component={QuizNavigator}
          options={() => ({
            tabBarButton: () => null,
            unmountOnBlur: true,
          })}
        />
      </Tab.Navigator>

      <StatusBar style={"auto"} backgroundColor={"black"} color={"yellow"} />
    </NavigationContainer>
  );
};
