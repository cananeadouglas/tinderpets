// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp,  } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6mBY6DC0FHystbONKnpMPncqijPCOLpA",
  authDomain: "fir-auth-8752f.firebaseapp.com",
  projectId: "fir-auth-8752f",
  storageBucket: "fir-auth-8752f.appspot.com",
  messagingSenderId: "110791545593",
  appId: "1:110791545593:web:8b20a18dd7aae437e60828"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

// Configure o Firebase Authentication para usar local persistence (persistência local)
export { auth };
