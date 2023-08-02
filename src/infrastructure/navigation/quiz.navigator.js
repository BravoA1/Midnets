import { createStackNavigator } from "@react-navigation/stack";
import { ThemeScreen } from "../../screens/quizz/theme.screen";
import { QuizParent } from "../../screens/quizz/quizzParent.screen";
import { RulesScreen } from "../../screens/quizz/rules.screen";
import { ResultScreen } from "../../screens/result/result.screen";

const QuizStack = createStackNavigator();

export const QuizNavigator = () => {
  return (
    <QuizStack.Navigator screenOptions={{ headerShown: false }}>
      <QuizStack.Screen name="Theme" component={ThemeScreen}></QuizStack.Screen>
      <QuizStack.Screen name="Quiz" component={QuizParent}></QuizStack.Screen>
      <QuizStack.Screen name="Rule" component={RulesScreen}></QuizStack.Screen>
      <QuizStack.Screen
        name="Result"
        component={ResultScreen}
      ></QuizStack.Screen>
      {/* <QuizStack.Screen></QuizStack.Screen> */}
    </QuizStack.Navigator>
  );
};
