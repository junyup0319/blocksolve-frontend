import firebase from 'firebase/app';
import { auth as firebaseAuth } from './app';

import _ from 'lodash';

export enum SignInMethod {
  Google,
  // GitHub,
  // Twitter,
}

let listener: any = null;
firebaseAuth.onAuthStateChanged(async (u) => {
  if (_.isNil(u)) {
    return;
  }
  if (_.isNil(listener)) {
    return;
  }
  listener(u);
});
const auth = {
  signIn() {
    const provider: firebase.auth.AuthProvider = new firebase.auth.GoogleAuthProvider();
    firebaseAuth.signInWithRedirect(provider);
  },
  signOut(): Promise<void> {
    return new Promise((resolve, reject) => {
      firebaseAuth
        .signOut()
        .then(() => {
          console.log(firebaseAuth.currentUser);
          resolve();
        })
        .catch((e) => reject(e));
    });
  },
  setOnAuthChanged(callback: (u: any) => void) {
    listener = callback;
  },

};
export default auth;
