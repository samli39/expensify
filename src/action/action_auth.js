import { firebase, googleAuthProvider } from '../firebase/firebase';

export const startLogin = () => {
  	console.log("2");
    return firebase.auth().signInWithPopup(googleAuthProvider);
};