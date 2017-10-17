import firebase from 'firebase'
import { push } from 'react-router-redux'

import { 
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	SIGNUP_USER_START,
	SIGNUP_USER_SUCCESS,
	SIGNUP_USER_FAIL,
	USER_LOGGED_OUT,
	SIGNIN_USER_START,
	SIGNIN_USER_SUCCESS,
	SIGNIN_USER_FAIL 
} from '../types' 

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
		.then(user => signUpUserSuccess(dispatch, user))
		.catch(error => signUpUserFail(dispatch, error))		
	}
}

const signUpUserSuccess = (dispatch, user) => {
	dispatch({ 
		type: SIGNUP_USER_SUCCESS, 
		payload: user 
	})
	dispatch(push('/user-profile'))
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
	dispatch(push('/user-profile'))
}

const signInUserFail = (dispatch, error ) => {
	dispatch({ 
		type: SIGNIN_USER_FAIL, 
		payload: error.message 
	})
}

export const logOutUser = () => {
	return (dispatch) => {
		firebase.auth().signOut()
		.then(()=> { 
			dispatch({ type: USER_LOGGED_OUT })
		})
		.catch(error => console.log(error))
	}
}




