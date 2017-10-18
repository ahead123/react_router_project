import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './components/Home'
import About from './components/About'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import UserProfile from './components/UserProfile'

class Routes extends Component {
	render(){
		return (
			<div>
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
				<Route path="/sign-in" component={SignIn} />
				<Route path="/sign-up" component={SignUp} />
				<Route path="/user-profile" component={UserProfile} />
		 </div>
		)
	}
}

export default Routes