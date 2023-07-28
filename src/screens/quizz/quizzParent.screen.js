import { useEffect } from "react";
import { QuizContextProvider } from "../../services/quiz/quiz.context";
import { QuizzScreen } from "./quizz.screen";

export const QuizParent = ({ navigation, route }) => {
  const { difficulty } = route.params;

  return (
    <QuizContextProvider>
      <QuizzScreen difficulty={difficulty} navigation={navigation} />
    </QuizContextProvider>
  );
};
