// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
//* TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBc6RoIE0A80PfPRMyc9QyyrukNcXeq7FQ',
  authDomain: 'technetredux-827b9.firebaseapp.com',
  projectId: 'technetredux-827b9',
  storageBucket: 'technetredux-827b9.appspot.com',
  messagingSenderId: '256747856309',
  appId: '1:256747856309:web:25f5542852d1161945b9fc',
  measurementId: 'G-YYTB6WNLFQ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
