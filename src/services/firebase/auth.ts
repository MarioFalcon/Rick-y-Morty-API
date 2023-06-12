import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import app from './firebase'

const firebaseAuth = getAuth(app)

export async function login(email: string, password: string) {
  try {
    const credentials = await signInWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    )

    return (credentials?.user && credentials.user) || null
  } catch (err) {
    console.log(err)
  }
}

export async function signup(email: string, password: string) {
  try {
    const credentials = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    )

    return credentials?.user ? credentials.user : null
  } catch (err) {
    console.log(err)
  }
}

export async function logout() {
  try {
    await signOut(firebaseAuth)
  } catch (err) {
    console.log(err)
  }
}
