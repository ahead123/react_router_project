import firebase from 'firebase'
import { store } from './store'
import { push } from 'react-router-redux'

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

fireUpFirebaseApp()

export const activeUser = (message) => {
	firebase.auth().onAuthStateChanged((user) => {
	    if (user) {
	      const { currentUser } = firebase.auth()
	      if (message) {
	      	console.log(message, currentUser.uid)
	      	console.log('current user', currentUser)
	      } else {
	      	console.log(currentUser.uid)
	      }	    
				return currentUser.uid
	    } else {
	      console.log(message)
	      store.dispatch(push('/'))
	    }
	  })
}