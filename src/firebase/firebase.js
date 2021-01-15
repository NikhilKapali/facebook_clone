import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAGVLVNlJZuKTKjPaE3skC-91WNsw5dzeo",
    authDomain: "clone-fb-57c3f.firebaseapp.com",
    projectId: "clone-fb-57c3f",
    storageBucket: "clone-fb-57c3f.appspot.com",
    messagingSenderId: "1094624070431",
    appId: "1:1094624070431:web:855787b89ae06bc71cfe2a",
    measurementId: "G-KNFEKFK3BE"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;