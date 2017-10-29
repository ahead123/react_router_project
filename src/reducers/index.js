import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading-bar'
import { firebaseStateReducer } from 'react-redux-firebase'
import UserReducer from './UserReducer'

export default combineReducers({
	user: UserReducer,
	loadingBar: loadingBarReducer,
	firebase: firebaseStateReducer
})