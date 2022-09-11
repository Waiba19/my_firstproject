import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyD1twAg9ka8iGxPbF5PZ7dqTeRZmwhwxKM",
    authDomain: "todo-list-b8585.firebaseapp.com",
    projectId: "todo-list-b8585",
    storageBucket: "todo-list-b8585.appspot.com",
    messagingSenderId: "544201455754",
    appId: "1:544201455754:web:24b67e59b99ec784d85573",
    measurementId: "G-36N6PMTYL2"
};


const firebaseApp = firebase.initializationApp(firebaseConfig);
const db = firebaseApp.firebase();
export default db;
