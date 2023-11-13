import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDrSS_gx37St0BvnxBrAZZo78eMvS22wo4",
    authDomain: "todo-webapp-b52e6.firebaseapp.com",
    databaseURL: "https://todo-webapp-b52e6-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "todo-webapp-b52e6",
    storageBucket: "todo-webapp-b52e6.appspot.com",
    messagingSenderId: "513723484406",
    appId: "1:513723484406:web:735f288d86490779e584d7",
    measurementId: "G-9CDE3NYCNP"
})

export {firebaseConfig as firebase}