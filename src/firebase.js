import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyC-s5uepmXmH83Rn8PN5VVR_PCh5z-fHV4",
  authDomain: "redux-test-6b112.firebaseapp.com",
  databaseURL: "https://redux-test-6b112.firebaseio.com",
  projectId: "redux-test-6b112",
  storageBucket: "redux-test-6b112.appspot.com",
  messagingSenderId: "338295456"
}

export const fireUpFirebaseApp = () => {
	firebase.initializeApp(config)
}