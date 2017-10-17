import { 
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	SIGNUP_USER_START,
	SIGNUP_USER_SUCCESS,
	SIGNUP_USER_FAIL 
} from '../actions/types'

const INITIAL_STATE = {
	email: '',
	password: '',
	error: '',
	loading: null
}

export default (state=INITIAL_STATE, action) => {
	switch (action.type) {
		case EMAIL_CHANGED:
			return { ...state, email: action.text }
		case PASSWORD_CHANGED:
			return { ...state, password: action.text }
		case SIGNUP_USER_START:
			return { ...state, loading: true }
		case SIGNUP_USER_SUCCESS:
			return { ...state, ...INITIAL_STATE, user: action.payload }
		case SIGNUP_USER_FAIL:
			return { ...state, ...INITIAL_STATE, error: action.payload }
		default:
			return state
	}
}