import firebase from 'firebase';

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

var firebaseRef = firebase.database().ref();

firebaseRef.set({
    app: {
        name: 'Todo App',
        version: '1.0.0'
    },
    isRunning: true,
    user: {
        name: 'Puneet',
        age: 0
    }
});

// firebaseRef.update({
//     isRUnning: false,
//     'app/name': 'Todo Application'
// });

// same as above
// firebaseRef.child('app').update({
//     name: 'Todo Application'
// }).then(() => {
//     console.log('Update worked!');
// }, (e) => {
//     console.log('Update failed');
// });

firebaseRef.update({
    'app/name': 'Todo Application',
    'user/name': 'Anonymous'
});

// same as above
firebaseRef.child('app').update({
    name: 'Todo Application'
});
firebaseRef.child('user').update({
    name: 'Anonymous'
});

//firebaseRef.child('app/name').remove();
// firebaseRef.child('app').update({
//     version: '2.0',
//     name: null
// });

// firebaseRef.update({
//     isRunning: null
// });
// firebaseRef.child('user/age').remove();

// firebaseRef.once('value').then((snapshot) => {
//     console.log('Got entire database', snapshot.val());
// }, (e) => {
//     console.log('Unable to fetch value', e);
// });

// firebaseRef.child('app').once('value').then((snapshot) => {
//     console.log('Got entire database', snapshot.key, snapshot.val());
// }, (e) => {
//     console.log('Unabel to fetch value', e);
// });

// firebaseRef.on('value', (snapshot) => {
//     console.log('Got value', snapshot.val());
// });

// firebaseRef.off();

// firebaseRef.update({isRunning: false});

// var logData = (snapshot) => {
//     console.log('Got value', snapshot.val());
// };

// firebaseRef.on('value', logData);

// firebaseRef.off('value', logData);

// firebaseRef.update({isRunning: false});

// var logData = (snapshot) => {
//     console.log('Got value', snapshot.val());
// };

// firebaseRef.child('user').on('value', logData);

// firebaseRef.child('user').update({name: 'Mike'});
// firebaseRef.child('app').update({name: 'Todo App'});

// firebaseRef.child('user').off('value', logData);

var notesRef = firebaseRef.child('notes');

notesRef.on('child_added', (snapshot) => {
    console.log('child_added', snapshot.key, snapshot.val());
});

notesRef.on('child_changed', (snapshot) => {
    console.log('child_changed', snapshot.key, snapshot.val());
});

notesRef.on('child_removed', (snapshot) => {
    console.log('child_removed', snapshot.key, snapshot.val());
});

var newNoteRef = notesRef.push();
newNoteRef.set({
    text: 'Walk the dog'
});

var newNoteRef = notesRef.push({
    text: 'Walk the dog!'
});
console.log('Todo id', newNoteRef.key);

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
    console.log('child_added', todosRef.key, snapshot.val());
});

todosRef.push({
    text: "Eat"
});
todosRef.push({
    text: "Sleep"
});