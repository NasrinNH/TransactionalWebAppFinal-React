import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBlWv-m3cdCIOzElWSMhXhYVyK1PzWoLHU",
  authDomain: "transactional-web-app-final.firebaseapp.com",
  projectId: "transactional-web-app-final",
  storageBucket: "transactional-web-app-final.appspot.com",
  messagingSenderId: "995858693499",
  appId: "1:995858693499:web:3045bf2de510b06ba591de",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};
