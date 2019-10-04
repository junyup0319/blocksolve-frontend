import * as firebase from 'firebase/app';
import 'firebase/auth';
// import 'firebase/storage';
import 'firebase/firestore';


import config from '@/firebaseConfig';

const app: firebase.app.App = firebase.initializeApp(config);
const database = app.firestore();
const auth: firebase.auth.Auth = app.auth();

export default app;
export {auth, database};
