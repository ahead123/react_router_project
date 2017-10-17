import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import { createLogger } from 'redux-logger'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import Link from 'react-router-redux-dom-link'
import './index.css';
import App from './App';
import About from './components/About'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import reducers from './reducers'
import registerServiceWorker from './registerServiceWorker'
import { fireUpFirebaseApp } from './firebase'

// initialize firebase app on root
fireUpFirebaseApp()

let history = createHistory()
let store = createStore(
	reducers, 
	{}, 
	applyMiddleware(
		ReduxThunk,
		routerMiddleware(history), 
		createLogger()
	)
)

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			 <div>
				<Route exact path="/" component={App} />
				<Route path="/about" component={About} />
				<Route path="/sign-in" component={SignIn} />
				<Route path="/sign-up" component={SignUp} />				
			</div>
		</ConnectedRouter>
	</Provider>, document.getElementById('root'));
registerServiceWorker();
