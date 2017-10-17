import firebase from 'firebase'

import { 
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	SIGNUP_USER_START,
	SIGNUP_USER_SUCCESS,
	SIGNUP_USER_FAIL 
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
			firebase.auth().createUserWithEmailAndPassword(email, password)
				.then(user => signUpUserSuccess(dispatch, user))
				.catch(error => signUpUserFail(dispatch, error.message))		
	}
}

const signUpUserSuccess = (dispatch, user) => {
	dispatch({ 
		type: SIGNUP_USER_SUCCESS, 
		payload: user 
	})
}

const signUpUserFail = (dispatch, error) => {
	dispatch({ 
		type: SIGNUP_USER_FAIL, 
		payload: error 
	})
}


