import { createStackNavigator } from "@react-navigation/stack";
import { ThemeScreen } from "../../screens/quizz/theme.screen";
import { QuizParent } from "../../screens/quizz/quizzParent.screen";

const QuizStack = createStackNavigator();

export const QuizNavigator = () => {
  return (
    <QuizStack.Navigator screenOptions={{ headerShown: false }}>
      <QuizStack.Screen name="Theme" component={ThemeScreen}></QuizStack.Screen>
      <QuizStack.Screen name="Quiz" component={QuizParent}></QuizStack.Screen>
      {/* <QuizStack.Screen></QuizStack.Screen> */}
    </QuizStack.Navigator>
  );
};
