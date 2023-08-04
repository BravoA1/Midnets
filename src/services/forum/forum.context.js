import { createContext, useEffect, useState } from "react";
import { GetAllForum } from "./forum.services";

export const ForumContext = createContext();

export const ForumContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [forums, setForums] = useState(null);
  useEffect(() => {
    setLoading(true);
    GetAllForum()
      .then((data) => {
        setForums(data);
      })
      .then(() => setLoading(false));
  }, []);

  useEffect(() => {
    console.log(forums, "forums");
  }, [forums]);
  useEffect(() => {
    console.log(loading, "loading");
  }, [loading]);

  return (
    <ForumContext.Provider value={{ loading: loading, forums: forums }}>
      {children}
    </ForumContext.Provider>
  );
};
