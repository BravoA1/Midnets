import { useEffect } from "react";
import { QuizContextProvider } from "../../services/quiz/quiz.context";
import { QuizzScreen } from "./quizz.screen";

export const QuizParent = ({ route }) => {
  const { difficulty } = route.params;

  return (
    <QuizContextProvider>
      <QuizzScreen difficulty={difficulty} />
    </QuizContextProvider>
  );
};
