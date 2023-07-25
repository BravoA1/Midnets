import { createContext, useEffect, useState } from "react";
import { getQuizData } from "./quiz.services";
import { firebase } from "../../../config";

export const QuizContext = createContext();

export const QuizContextProvider = ({ children }) => {
  const [quizDataEasy, setQuizDataEasy] = useState([]);
  const [quizDataMedium, setQuizDataMedium] = useState([]);
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
        setQuizDataEasy(data);
      })
      .then(
        firebase
          .firestore()
          .collection("quiz")
          .doc("medium")
          .collection("quiz")
          .get()
          .then((snapshot) => {
            let data = [];
            snapshot.forEach((doc) => {
              data.push(doc.data());
            });
            setQuizDataMedium(data);
          })
          .then(() => setLoading(false))
          .catch((error) => {
            console.error(`error in getQuizDataMedium ${error}`);
            setQuizDataMedium([]);
            setLoading(false);
          })
      )
      .catch((error) => {
        console.error(`error in getQuizData ${error}`);
        setQuizDataEasy([]);
        setLoading(false);
      });
  }, []);

  return (
    <QuizContext.Provider
      value={{
        quizDataEasy: quizDataEasy,
        quizDataMedium: quizDataMedium,
        loading: loading,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
