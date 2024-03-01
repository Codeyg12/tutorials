import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "", //! DELETE B4 SAVING
  authDomain: "insta-clone-21c28.firebaseapp.com",
  projectId: "insta-clone-21c28",
  storageBucket: "insta-clone-21c28.appspot.com",
  messagingSenderId: "171718470807",
  appId: "1:171718470807:web:afb3058334ffbd2b23cdd2",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
``