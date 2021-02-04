import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC_vH0IP2B1EoL1iZmo-S_Y2JfUB1GhTmY",
    authDomain: "slack-clone-50252.firebaseapp.com",
    projectId: "slack-clone-50252",
    storageBucket: "slack-clone-50252.appspot.com",
    messagingSenderId: "300713948378",
    appId: "1:300713948378:web:cd0ffdbc590afe4a0ea1e3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
