import firebase from 'firebase'
import { push } from 'react-router-redux'
import { activeUser } from '../../firebase'

import { 
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	SIGNUP_USER_START,
	SIGNUP_USER_SUCCESS,
	SIGNUP_USER_FAIL,
	USER_LOGGED_OUT,
	SIGNIN_USER_START,
	SIGNIN_USER_SUCCESS,
	SIGNIN_USER_FAIL,
	FETCH_PROFILE_START,
	FETCH_PROFILE_SUCCESS 
} from '../types' 

const currentUser = firebase.auth()

export const emailChanged = text => {
	return {
		type: EMAIL_CHANGED,
		text
	}
}

export const passwordChanged = text => {
	return {
		type: PASSWORD_CHANGED,
		text
	}
}

export const signUpUser = ({ email, password }) => {

	return (dispatch) => {
		dispatch({ type: SIGNUP_USER_START })		
		firebase
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.then(user => firebase.database().ref(`/users/${user.uid}`).push({ email }))
		.then(user => signUpUserSuccess(dispatch, user))
		.catch(error => signUpUserFail(dispatch, error))		
	}
}

const signUpUserSuccess = (dispatch, user) => {
	dispatch({ 
		type: SIGNUP_USER_SUCCESS, 
		payload: user 
	})
	dispatch(push('/users'))
}

const signUpUserFail = (dispatch, error ) => {
	dispatch({ 
		type: SIGNUP_USER_FAIL, 
		payload: error.message 
	})
}

export const signInUser = ({ email, password }) => {

	return (dispatch) => {
		dispatch({ type: SIGNIN_USER_START })		
		firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then(user => signInUserSuccess(dispatch, user))
		.catch(error => signInUserFail(dispatch, error))		
	}
}

const signInUserSuccess = (dispatch, user) => {
	dispatch({ 
		type: SIGNIN_USER_SUCCESS, 
		payload: user 
	})
	dispatch(push('/users'))
}

const signInUserFail = (dispatch, error ) => {
	dispatch({ 
		type: SIGNIN_USER_FAIL, 
		payload: error.message 
	})
}

export const logOutUser = () => {

	return (dispatch) => {
		dispatch({ type: USER_LOGGED_OUT })
		firebase.auth().signOut()
		.catch(error => console.log(error))
	}
}

export const fetchUserProfile = (dispatch) => {
	return (dispatch) => {
		dispatch({ type: FETCH_PROFILE_START })
		let userData = {}
		firebase.database().ref('/users/').orderByKey()
			.once('value').then(snapshot => {
				snapshot.forEach(childSnapshot => {
					let key = childSnapshot.key, 
							value = childSnapshot.val()
					if(key===currentUser.currentUser.uid){
						objectLooper(userData, key, value)
					}
			})
		})
		.then(() => fetchSuccess(dispatch, userData))
	}
}

// helper method for fetchUserProfile
const objectLooper = (anObject, key, value) => {
		for(var x in value){
			anObject['profile']=value[x]
		}
	return anObject
}

// helper method for fetchUserProfile
const fetchSuccess = (dispatch, userData) => {
	dispatch({
		type: FETCH_PROFILE_SUCCESS,
		payload: userData
	})
}




