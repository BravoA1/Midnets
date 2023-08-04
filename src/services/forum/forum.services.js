import { firebase } from "../../../config";

const db = firebase.firestore();

// Get forum collection
export const GetAllForum = () => {
  // Promise to get all the forum
  return new Promise(async (res, rej) => {
    try {
      // Create the snapshot to get all the collection forum
      const snapshot = await db.collection("forum").get();
      let dataParent = [];

      // Loop in each doc in forum
      for (const doc of snapshot.docs) {
        // Create a new object containing the data of one doc
        const newObj = doc.data();
        // Create response parameter
        newObj.response = [];
        // Get all the response
        const data = await GetAllResponse(doc);
        // Flat the response array
        newObj.response = data.flat();
        //Store the id
        newObj.id = doc.id;
        // Get the user info
        newObj.user = await GetUser(newObj.UserId);
        // Push this doc in the array containing all the forums
        dataParent.push(newObj);
      }

      res(dataParent);
    } catch (error) {
      rej(error);
    }
  });
};

// Get the User with specifid ID
const GetUser = (userId) => {
  return new Promise(async (res, rej) => {
    try {
      // Get the user
      const user = await db.collection("users").doc(userId).get();
      res(user.data());
    } catch (error) {
      rej(error);
    }
  });
};

// Get the answers in the forum collection
const GetAllResponse = (document) => {
  return new Promise(async (res, rej) => {
    try {
      // Create a snapshot to get all the collection response inside the document doc
      const snapshot = await document.ref.collection("response").get();
      let dataChild = [];

      // Loop in the snapshot
      for (const doc of snapshot.docs) {
        // New object containing the response
        const newObj = doc.data();
        // Create a new parameter response
        newObj.response = [];
        // Get all the response
        const data = await GetAllResponseOfResponse(doc);
        // Flat the response array
        newObj.response = data.flat();
        // Store the doc id
        newObj.id = doc.id;
        // Push this doc in the array containing all the response
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
      // Create a snapshot to get all the response inside the document doc
      const snapshot = await document.ref.collection("response").get();
      let dataChild = [];
      // Loop in the snapshot
      for (const doc of snapshot.docs) {
        // New object containing the response
        const newObj = doc.data();
        // Store the doc id
        newObj.id = doc.id;
        // Push this doc in the array containing all the response
        dataChild.push(newObj);
      }
      res(dataChild);
    } catch (error) {
      rej(error);
    }
  });
};
