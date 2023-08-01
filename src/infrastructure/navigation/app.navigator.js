import { NavigationContainer } from "@react-navigation/native";
import { useContext } from "react";
import { StatusBar } from "react-native";
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
import { AccessibilityScreen } from "../../screens/options/accessibility.screen";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native-svg";

export const AppNavigator = () => {
	const { info, user } = useContext(UserContext);

	const GoBackScreen = ({ navigation }) => {
		navigation.goBack();
	};

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
							case "QuizTheme":
								iconName = "chatbox-ellipses";
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
					component={GoBackScreen}
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
					component={ErrorScreen}
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
				{!user && (
					<Tab.Screen
						options={() => ({
							tabBarButton: () => null,
						})}
						name="Login"
						component={AuthNavigator}
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
				{user && <Tab.Screen name="Signout" component={Signout} />}
			</Tab.Navigator>

			<StatusBar style={"auto"} backgroundColor={"black"} color={"yellow"} />
		</NavigationContainer>
	);
};
