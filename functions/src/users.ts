import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

const db = admin.firestore();
const REGION = "europe-west3";

export const saveUserData = functions
    .region(REGION)
    .runWith({memory: "128MB", timeoutSeconds: 60})
    .auth.user()
    .onCreate((user: admin.auth.UserRecord) => {
      const payload = {
        displayName: user.displayName,
        email: user.email,
        joined: user.metadata.creationTime,
        photoURL: user.photoURL || "https://robohash.org/" + user.uid,
        uid: user.uid,
        role: ["member"],
      };
      console.log("payload: ", payload);
      const userRef = db.doc(`/users/${user.uid}`);
      return userRef.set(payload);
    });
