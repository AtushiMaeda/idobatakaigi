import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBm8vM2xECenLli-Fe_v8JaQKNJ6hD9cVo",
  authDomain: "idobatakaigi-with-atsu.firebaseapp.com",
  databaseURL: "https://idobatakaigi-with-atsu.firebaseio.com",
  projectId: "idobatakaigi-with-atsu",
  storageBucket: "idobatakaigi-with-atsu.appspot.com",
  messagingSenderId: "864632316710",
  appId: "1:864632316710:web:9539afe41d87cfa8fad7e7"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messagesRef = database.ref('messages');

export const pushMessage = ({ name, text }) => {
  messagesRef.push({ name, text });
};