import { createStackNavigator } from "@react-navigation/stack";
import { ThemeScreen } from "../../screens/quizz/theme.screen";
import { QuizzScreen } from "../../screens/quizz/quizz.screen";
import { QuizContextProvider } from "../../services/quiz/quiz.context";

const QuizStack = createStackNavigator();

const QuizParent = () => (
  <QuizContextProvider>
    <QuizzScreen />
  </QuizContextProvider>
);

export const QuizNavigator = () => {
  return (
    <QuizStack.Navigator screenOptions={{ headerShown: false }}>
      <QuizStack.Screen name="Theme" component={ThemeScreen}></QuizStack.Screen>
      <QuizStack.Screen name="Quiz" component={QuizParent}></QuizStack.Screen>
      {/* <QuizStack.Screen></QuizStack.Screen> */}
    </QuizStack.Navigator>
  );
};
