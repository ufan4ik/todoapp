import * as firebase from "firebase/app"
import "firebase/firestore"
import firebaseConfig from "./firebaseConfig"

let firebaseApp

if (!firebase.apps.length) {
	firebaseApp = firebase.initializeApp(firebaseConfig)
} else {
	firebaseApp = firebase.apps[0]
}



export const db = firebaseApp.firestore()

export default firebaseApp