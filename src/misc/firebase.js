import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyC7_khm41MXlxqYrY56NOTMdIZcdCSATis',
  authDomain: 'chat-web-app-46de4.firebaseapp.com',
  projectId: 'chat-web-app-46de4',
  storageBucket: 'chat-web-app-46de4.appspot.com',
  messagingSenderId: '43260014958',
  appId: '1:43260014958:web:0b010c7d8b296bfb9b117f',
};

const app = firebase.initializeApp(config);

export const auth = app.auth();
export const database = app.database();
