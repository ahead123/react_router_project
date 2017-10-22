import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import NotFound from './components/NotFound'
import UserProfile from './components/UserProfile'

class Routes extends Component {
	render(){
		return (
			<Switch>
				<Route exact path="/" component={Home}/>
				<Route path="/about" component={About} />
				<Route path="/sign-in" component={SignIn} />
				<Route path="/sign-up" component={SignUp} />
				<Route path="/users" component={UserProfile} />
				<Route path="*" component={NotFound} />
		 </Switch>
		)
	}
}

export default Routes