import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDdXWmhV5SRY1K_U1vbRIkuXSh-7p0l_sE",
  authDomain: "project-shop-gundam.firebaseapp.com",
  projectId: "project-shop-gundam",
  storageBucket: "project-shop-gundam.appspot.com",
  messagingSenderId: "1025356359171",
  appId: "1:1025356359171:web:2f8c19d32a76bc564e1036",
  measurementId: "G-XWVES8QDV0",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;
