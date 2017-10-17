import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
import { createLogger } from 'redux-logger'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'

export const history = createHistory()
export const store = createStore(
	reducers, 
	{}, 
	applyMiddleware(
		ReduxThunk, 
		routerMiddleware(history), 
		createLogger()
	)
)