import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyD6m5_52_dnSFNM2i8yyZ1z_InasbKbZLM",
  authDomain: "git-portfolio-d8e13.firebaseapp.com",
  projectId: "git-portfolio-d8e13",
  storageBucket: "git-portfolio-d8e13.appspot.com",
  messagingSenderId: "1082961694136",
  appId: "1:1082961694136:web:c208e3d16bf50673fbd34d",
  measurementId: "G-V9B0WDQNFG",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
