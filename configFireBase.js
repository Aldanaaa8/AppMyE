// Import necessary Firebase functions
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAnalytics, isSupported } from "firebase/analytics";


// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvpkoXyOpinFZ1uPqrOZwci86WyFptyoY",
  authDomain: "tiendamyee.firebaseapp.com",
  projectId: "tiendamyee",
  storageBucket: "tiendamyee.appspot.com",
  messagingSenderId: "346436152838",
  appId: "1:346436152838:web:f6ec65de33b00304521d87",
  measurementId: "G-SZ3V3G88C8"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Set up authentication with persistence in AsyncStorage
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// Set up Firestore
const db = getFirestore(app);

// Initialize Analytics if supported
isSupported().then((supported) => {
  if (supported) {
    const analytics = getAnalytics(app);
  }
});

// Export app, auth, and db
export { app, auth, db };