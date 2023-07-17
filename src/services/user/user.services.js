import { firebase } from "../../../config";

export const getCurrentUser = () => {
  firebase
    .firestore()
    .collection("users")
    .doc(firebase.auth().currentUser.uid)
    .get()
    .then((snapshot) => {
      if (snapshot.exists) {
        return snapshot.data();
      } else {
        console.log("User does not exist");
        return null;
      }
    });
};
