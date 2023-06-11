import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: 'rick-y-morty-6e048.appspot.com',
  messagingSenderId: '58683322312',
  appId: '1:58683322312:web:965b6be328026d977e9afd',
}

const app = initializeApp(firebaseConfig)

export default app
