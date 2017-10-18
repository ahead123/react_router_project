import React, { Component } from 'react'
import Link from 'react-router-redux-dom-link'
import { NavButton } from './common'

class Navigation extends Component {
	render(){
		return(
			<div className="col-12">
		    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
		      <div className="container">
		        <Link className="navbar-brand" to="/">TipJar</Link>
		        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
		          <span className="navbar-toggler-icon"></span>
		        </button>
		        <div className="collapse navbar-collapse" id="navbarResponsive">
		          <ul className="navbar-nav ml-auto">
		            <NavButton path="/sign-up" text="Sign Up" />
		            <NavButton path="/sign-in" text="Sign In" />
		            <NavButton path="/about" text="About" />
		          </ul>
		        </div>
		      </div>
		    </nav>
	    {this.props.children}
	    </div>
		)
	}
}

export default Navigation