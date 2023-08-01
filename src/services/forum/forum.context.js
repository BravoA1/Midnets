import { createContext, useEffect, useState } from "react";
import { QuizContext } from "../quiz/quiz.context";
import { GetAllForum } from "./forum.services";

export const ForumContext = createContext();

export const ForumContextProvider = ({ children }) => {
  const [loading, setLoading] = useState();
  const [forums, setForums] = useState();
  useEffect(() => {
    GetAllForum().then((data) => setForums(data));
  }, []);

  useEffect(() => {
    console.log(forums, "forums");
    if (forums) {
      console.log(forums[0].response, "response");
      console.log(forums[0].response[0].response, "response");
    }
  }, [forums]);

  return (
    <QuizContext.Provider value={{ loading: loading, forums: forums }}>
      {children}
    </QuizContext.Provider>
  );
};
