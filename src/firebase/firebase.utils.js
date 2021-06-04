import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const config = {

    apiKey: "AIzaSyBo8CEzid-GNN1akU1hTLzV0qcXhx8yVAA",
    authDomain: "crown-db-7225f.firebaseapp.com",
    projectId: "crown-db-7225f",
    storageBucket: "crown-db-7225f.appspot.com",
    messagingSenderId: "390969304207",
    appId: "1:390969304207:web:06110b68890aa33a367cfa",
    measurementId: "G-Y71R7354WS"

 }


 firebase.initializeApp(config)

 export const auth      = firebase.auth()

 export const firestore = firebase.firestore()

 const provider         = new firebase.auth.GoogleAuthProvider()

 provider.setCustomParameters({prompt : 'select_account'})

 export const signInWithGoogle = () => auth.signInWithPopup(provider)


 export default firebase