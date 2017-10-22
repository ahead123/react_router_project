import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { store, history } from './store'
import Routes from './Routes'
import registerServiceWorker from './registerServiceWorker'
import { activeUser } from './firebase'
import Navigation from './components/Navigation'

class StartUp extends Component {

	componentWillMount() {
	  activeUser('inside startup')
	}

	render() {
		return(
			<Provider store={store}>
				<ConnectedRouter history={history}>
				 <div>
				 	<Navigation />
					<Routes />					
				 </div>		
				</ConnectedRouter>
			</Provider>
		)
	}
}

ReactDOM.render(<StartUp />, document.getElementById('root'));
registerServiceWorker();
