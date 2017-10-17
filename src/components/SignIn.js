import React, { Component } from 'react'
import Link from 'react-router-redux-dom-link'
import { connect } from 'react-redux'
import { signInUser, emailChanged, passwordChanged } from '../actions/userActions'

class SignIn extends Component {

	handleButtonPress(event) {
		event.preventDefault()
		const { email, password } = this.props
		this.props.signInUser({ email, password })
	}

	renderButton() {
		if (this.props.loading) {
			return (
				<p>Loading...</p>
			)
		}

		return (
			<button 
				className="btn btn-primary"
				onClick={this.handleButtonPress.bind(this)}
			>
				Sign In
			</button>
		)
	}

	render() {

		const { 
			email, password, error, emailChanged, passwordChanged } = this.props
			
		return (
			<div className="text-center">
				<div className="page-header">
					<h2>Sign In</h2>
				</div>
				<div className="row">
					<div className="col-md-4 col-md-offset-4">
						<form className="form well">
							<div className="form-group">
								<label>Email</label>
								<input 
									type="email" 
									className="form-control"
									placeholder="Email"
									onChange={e => emailChanged(e.target.value)}
									value={email}
								/>
							</div>
							<div className="form-group">
								<label>Password</label>
								<input 
									type="password" 
									className="form-control"
									placeholder="Password"
									onChange={e => passwordChanged(e.target.value)}
									value={password}
								/>
							</div>
							<p style={{color: 'red'}}>
								{error}
							</p>
							{this.renderButton()}
							<p style={{marginTop: 25 }}>
								<Link to="/sign-up" style={{color: 'green' }}>
									need an account? sign up here
							  </Link>
							</p>
						</form>			
					</div>		
				</div>
				<div className="row" style={{marginTop: 50}}>
					<footer>
						<Link to="/" className="btn btn-success">Home</Link>
					</footer>	
				</div>			
			</div>
		)
	}
}

const maptStateToProps = ({ user }) => {
	const { email, password, error, loading } = user
	return { email, password, error, loading }
}

export default connect(maptStateToProps, { 
	signInUser, emailChanged, passwordChanged  
})(SignIn)

