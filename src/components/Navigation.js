import React, { Component } from 'react'
import Link from 'react-router-redux-dom-link'
import { connect } from 'react-redux'
import { NavButton } from './common'
import { logOutUser } from '../actions/userActions'

class Navigation extends Component {

	handleClick(event) {
		event.preventDefault()
		this.props.logOutUser()
	}

	showNavLinks() {
		const { email, user } = this.props
		
		if( email!=="" && user ){
			const message = email ? `Welcome Back! ${email}` : 'Hello'
			return (
				<ul className="navbar-nav ml-auto">
					<NavButton path="/users" text={message} /> 
					<li className="nav-item">
	  				<a
	  					className="nav-link"
	  					onClick={this.handleClick.bind(this)}
	  				>
	  					Sign Out
	  				</a>
					</li>
				</ul>
			)
		}
		return (
			<ul className="navbar-nav ml-auto">
				<NavButton path="/sign-up" text="Sign Up" />
				<NavButton path="/sign-in" text="Sign In" />
				<NavButton path="/about" text="About" />
			</ul>
		)
	}

	render(){
		console.log(this.props)
		return(
			<div className="col-12">
		    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
		      <div className="container">
		        <Link className="navbar-brand" to="/">TipJar</Link>
		        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
		          <span className="navbar-toggler-icon"></span>
		        </button>
		        <div className="collapse navbar-collapse" id="navbarResponsive">
		          
								{this.showNavLinks()}

		        </div>
		      </div>
		    </nav>
	    {this.props.children}
	    </div>
		)
	}
}

const mapStateToProps = (state) => {
	const { loading, user, email } = state.user
	return { loading, user, email }
}

export default connect(mapStateToProps, { logOutUser })(Navigation)

