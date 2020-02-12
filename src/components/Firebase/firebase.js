import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyBgWLNUmq_5ngfCuJUDi49mr1LWMxVFxrA",
    authDomain: "fir-auth-c1078.firebaseapp.com",
    databaseURL: "https://fir-auth-c1078.firebaseio.com",
    projectId: "fir-auth-c1078",
    storageBucket: "fir-auth-c1078.appspot.com",
    messagingSenderId: "374818665388",
    appId: "1:374818665388:web:b85a761769a002a41c4009"

};
class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.database();
  }
  /*Auth API*/
  doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
    doSignOut = () => this.auth.signOut();
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
    // *** User API ***/
  user = uid => this.db.ref(`users/${uid}`);
  users = () => this.db.ref('users');
}
export default Firebase;