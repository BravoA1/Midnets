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
import Params from "../../screens/Params/Params.screen";
import { AccountScreen } from "../../screens/Params/Account.screen";
import { AccessibilityScreen } from "../../screens/options/accessibility.screen";

// Context
import { UserContext } from "../../services/user/user.context";
import { QuizNavigator } from "./quiz.navigator";
import { AuthNavigator } from "./auth.navigator";
import { PortraitNavigator } from "./portrait.navigator";
import { NotificationApp } from "../../screens/notification/notification.screen.js";
import { TopNavigation } from "../../components/topNavigation";
import { ForumNavigator } from "./forum.navigator";
import { ForumContextProvider } from "../../services/forum/forum.context";
import { Forum } from "../../screens/forum/forum.screen";

export const AppNavigator = () => {
  const { info, user } = useContext(UserContext);

  // console.log(info, "navbar");
  // console.log(user, "navbar");

  const ForumParent = (navigation, route) => (
    <ForumContextProvider>
      <ForumNavigator />
    </ForumContextProvider>
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
          component={Params}
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
          component={ForumParent}
        />
        <Tab.Screen
          options={() => ({
            tabBarButton: () => null,
          })}
          name="Params"
          component={Params}
        />
        <Tab.Screen
          options={() => ({
            tabBarButton: () => null,
          })}
          name="Account"
          component={AccountScreen}
        />
        <Tab.Screen
          options={() => ({
            tabBarButton: () => null,
          })}
          name="Accessibility"
          component={AccessibilityScreen}
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
        {user && (
          <Tab.Screen
            name="Signout"
            component={Signout}
            options={() => ({
              tabBarButton: () => null,
            })}
          />
        )}
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
