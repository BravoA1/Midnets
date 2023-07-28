import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { PortraitsScreen } from "../../screens/Portraits/portrait.screen";
import { PortraitArticleScreen } from "../../screens/portraitArticle/portraitArticle.screen";
import { HomeScreen } from "../../screens/home/home.screen";

const PortraitStack = createStackNavigator();

export const PortraitNavigator = ({ navigation, route }) => {
  const { name } = route.params;

  return (
    <PortraitStack.Navigator screenOptions={{ headerShown: false }}>
      <PortraitStack.Screen
        name="PortraitHome"
        component={PortraitsScreen}
      ></PortraitStack.Screen>
      <PortraitStack.Screen
        name="PortraitArticle"
        component={PortraitArticleScreen}
      ></PortraitStack.Screen>
      <PortraitStack.Screen
        name="PortraitArticlePopup"
        component={PortraitArticleScreen}
        options={{
          ...TransitionPresets.ModalPresentationIOS,
        }}
      ></PortraitStack.Screen>
    </PortraitStack.Navigator>
  );
};
