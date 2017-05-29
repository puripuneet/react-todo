import firebase from 'firebase';

try {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyArzwVyyg3D_sSkqv5cJwY_aiYxG6SXeDk",
        authDomain: "puneet-todo-app.firebaseapp.com",
        databaseURL: "https://puneet-todo-app.firebaseio.com",
        projectId: "puneet-todo-app",
        storageBucket: "puneet-todo-app.appspot.com",
        messagingSenderId: "1054379649881"
    };
    firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;