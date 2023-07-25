import { createContext, useEffect, useState } from "react";
import { getQuizData } from "./quiz.services";
import { firebase } from "../../../config";

export const QuizContext = createContext();

export const QuizContextProvider = ({ children }) => {
  const [quizData, setQuizData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    firebase
      .firestore()
      .collection("quiz")
      .doc("easy")
      .collection("quiz")
      .get()
      .then((snapshot) => {
        let data = [];
        snapshot.forEach((doc) => {
          data.push(doc.data());
        });
        setQuizData(data);
      })
      .then(() => setLoading(false))
      .catch((error) => {
        console.error(`error in getQuizData ${error}`);
        setQuizData([]);
        setLoading(false);
      });
  }, []);

  return (
    <QuizContext.Provider value={{ quizData: quizData, loading: loading }}>
      {children}
    </QuizContext.Provider>
  );
};
