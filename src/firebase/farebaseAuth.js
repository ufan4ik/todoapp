import withFirebaseAuth from "react-with-firebase-auth"
import * as firebase from "firebase/app"
import firebaseApp from './index'
import "firebase/auth"

const firebaseAppAuth = firebaseApp.auth()
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
}

export function withAuth(Component) {
  return withFirebaseAuth({ providers, firebaseAppAuth })(Component)
}