import { firebase } from "../../../config";

const db = firebase.firestore();

// Get forum collection
export const GetAllForum = () => {
  return new Promise(async (res, rej) => {
    try {
      const snapshot = await db.collection("forum").get();
      let dataParent = [];

      for (const doc of snapshot.docs) {
        const newObj = doc.data();
        newObj.response = [];
        const data = await GetAllResponse(doc);
        newObj.response = data.flat(); // Merge arrays of response objects into a flat array
        dataParent.push(newObj);
      }

      res(dataParent);
    } catch (error) {
      rej(error);
    }
  });
};

// Get the answers in the forum collection
const GetAllResponse = (document) => {
  return new Promise(async (res, rej) => {
    try {
      const snapshot = await document.ref.collection("response").get();
      let dataChild = [];

      for (const doc of snapshot.docs) {
        const newObj = doc.data();
        newObj.response = [];
        const data = await GetAllResponseOfResponse(doc);
        newObj.response = data.flat();
        dataChild.push(newObj);
      }

      res(dataChild);
    } catch (error) {
      rej(error);
    }
  });
};

// Get the answers nested in the answers collection
const GetAllResponseOfResponse = (document) => {
  return new Promise(async (res, rej) => {
    try {
      const snapshot = await document.ref.collection("response").get();
      let dataChild = [];

      for (const doc of snapshot.docs) {
        const newObj = doc.data();
        dataChild.push(newObj);
      }

      res(dataChild);
    } catch (error) {
      rej(error);
    }
  });
};
