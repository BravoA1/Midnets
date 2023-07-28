import { firebase } from "../../../config";

export function getQuizData() {
  firebase
    .firestore()
    .collection("quiz")
    .get()
    .then((snapshot) => {
      const data = [];
      snapshot.forEach((doc) => {
        data.push(doc.data());
      });
      return data;
    })
    .catch((error) => {
      console.error(`error in getQuizData ${error}`);
      return [];
    });
}
