import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logOutUser } from '../actions/userActions'

class UserProfile extends Component {

	handleClick() {
		this.props.logOutUser()
	}

	render() {
		return (
			<div>
			<div>Hello User</div>
			<button onClick={this.handleClick.bind(this)}>Sign Out</button>
			</div>
		)
	}
}

export default connect(null, { logOutUser })(UserProfile)