// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeELH8KRWMz5r436ysJJ91Y_JPIOmjVE4",
  authDomain: "netflix-gpt-ddf3a.firebaseapp.com",
  projectId: "netflix-gpt-ddf3a",
  storageBucket: "netflix-gpt-ddf3a.appspot.com",
  messagingSenderId: "388456931282",
  appId: "1:388456931282:web:7df901274c473efdb9720b",
  measurementId: "G-GBPNDCR32M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();