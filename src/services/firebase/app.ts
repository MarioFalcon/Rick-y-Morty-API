import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: "rick-y-morty-9f7a5.appspot.com",
    messagingSenderId: "25847775457",
    appId: "1:25847775457:web:4f108e44bd86202c4d77a0"
  };

const app = initializeApp(firebaseConfig)

export default app