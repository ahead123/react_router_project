import { createStore, applyMiddleware, compose } from 'redux'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
import { createLogger } from 'redux-logger'
import promise from 'redux-promise-middleware';
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import { config } from './firebase'

const reduxFirebaseConfig = { 
	userProfile: 'users', 
	attachAuthIsReady: true, 
	firebaseStateName: 'firebase' 
}

const createStoreWithFirebase = compose(
  reactReduxFirebase(config, reduxFirebaseConfig),
)(createStore)

export const history = createHistory()
export const store = createStoreWithFirebase(
	reducers, 
	{}, 
	applyMiddleware(
		promise(),
		ReduxThunk.withExtraArgument(getFirebase), 
		routerMiddleware(history), 
		createLogger()
	)
)