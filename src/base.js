import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBt5dWD8pcA79iydispiAFR7ZTpsUj76UY",
    authDomain: "catch-of-the-day-bam.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-bam.firebaseio.com",
    projectId: "catch-of-the-day-bam",
    storageBucket: "catch-of-the-day-bam.appspot.com",
    appId: "1:362192319583:web:28587919ed71a96d3ed7ea"
});

const base = Rebase.createClass(firebaseApp.database());
export {firebaseApp};
export default base;
