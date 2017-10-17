import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import { ConnectedRouter, push } from 'react-router-redux'
import Link from 'react-router-redux-dom-link'
import { store, history } from './store'
import Routes from './Routes'
import registerServiceWorker from './registerServiceWorker'
import { fireUpFirebaseApp } from './firebase'
import firebase from 'firebase'

// initialize firebase app on root
fireUpFirebaseApp()

class StartUp extends Component {

	componentWillMount() {
	  firebase.auth().onAuthStateChanged((user) => {
	    if (user) {
	      console.log('user logged',user)
	    } else {
	      console.log('no active user or user logged out')
	      store.dispatch(push('/'))
	    }
	  })
	}

	render() {
		return(
			<Provider store={store}>
				<ConnectedRouter history={history}>
					<Routes />		
				</ConnectedRouter>
			</Provider>
		)
	}
}

ReactDOM.render(<StartUp />, document.getElementById('root'));
registerServiceWorker();
