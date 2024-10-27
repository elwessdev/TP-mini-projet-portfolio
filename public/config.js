import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { CONFIG } from "./env.js";

const firebaseConfig = {
  apiKey: CONFIG.API_KEY,
  authDomain: CONFIG.AUTH_DOMAIN,
  projectId: CONFIG.PROJECT_ID,
  storageBucket: "git-portfolio-d8e13.appspot.com",
  messagingSenderId: "1082961694136",
  appId: "1:1082961694136:web:c208e3d16bf50673fbd34d",
  measurementId: "G-V9B0WDQNFG",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
