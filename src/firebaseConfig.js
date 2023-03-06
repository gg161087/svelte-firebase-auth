import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAfBqTXwsdMsCz91tPlGOY1DwvP-uwkim4",
  authDomain: "sveltekit-firebase-auth-d7a1e.firebaseapp.com",
  projectId: "sveltekit-firebase-auth-d7a1e",
  storageBucket: "sveltekit-firebase-auth-d7a1e.appspot.com",
  messagingSenderId: "170707509132",
  appId: "1:170707509132:web:90e01825776b775c3640a9"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);