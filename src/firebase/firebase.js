import * as firebase from 'firebase';
import expenses from '../tests/fixtures/expenses';
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export {
    firebase,
    database as default
}

// child_removed
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const exp = [];
//         snapshot.forEach((child) => {
//             const id = child.key;
//             const val = child.val();
//             exp.push({
//                 ...val,
//                 id
//             });
//         });
//         console.log(exp);
//     });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const exp = [];
//         snapshot.forEach((child) => {
//             const id = child.key;
//             const val = child.val();
//             exp.push({
//                 ...val,
//                 id
//             });
//         });
//         console.log(exp);
//     });

// database.ref('expenses').push(expenses[0]);
// database.ref('expenses').push(expenses[1]);
// database.ref('expenses').push(expenses[2]);

// database.ref('notes/-MEcf1Q7ZQTKbnRuswYO').remove()


// database.ref('notes').push({
//     title: 'Course topics',
//     body: 'react native, angular, python'
// });

// const firebaseNotes = {
//     notes: {
//         id1: {
//             id: '12',
//             title: 'first note',
//             body: 'note 1'
//         },
//         id2: {
//             id: '12',
//             title: 'first note',
//             body: 'note 1'
//         }
//     }
// };

// const notes = [{
//     id: '12',
//     title: 'first note',
//     body: 'note 1'
// }, {
//     id: '761ase',
//     title: 'another note',
//     body: 'note 2'
// }]
// database.ref('notes').set(notes);
// database.ref('notes/')

// const onValueChange = database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// setTimeout(() => {
//     database.ref().update({
//         name: 'mehdi'
//     });
// }, 3000)

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e);
// });
// const otherFunc = (snapshot) => {
//     console.log(snapshot.val());
// };
// console.log(onValueChange === onValueChange);
// console.log(onValueChange === otherFunc);
// setTimeout(() => {
//     database.ref('age').set(29);
// }, 3500);
// setTimeout(() => {
//     database.ref().off('value', onValueChange);
// }, 7000);
// setTimeout(() => {
//     database.ref('age').set(30);
// }, 10500);

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         let v = snapshot.val();
//         console.log(v);
//     })
//     .catch((e) => {
//         console.log('error fetching data', e);
//     });

// database.ref().set({
//     name: 'Andrew Mead',
//     age: 26,
//     stressLevel: 6,
//     job: {
//         title: 'software dev',
//         company: 'Google'
//     },
//     location: {
//         city: 'Ph',
//         country: 'us2'
//     }
// }).then(() => {
//     console.log('data is saved');
// }).catch((e) => {
//     console.log('This failed.', e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'amazon',
//     'location/city': 'shithole'
// });

// database.ref()
//     .remove()
//     .then(() => {
//         console.log('removed')
//     })
//     .catch(() => {
//         console.log('not removed')
//     });

