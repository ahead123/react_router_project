import React, { Component } from 'react'
import { connect } from 'react-redux'
import Link from 'react-router-redux-dom-link'
import { 
	emailChanged, 
	passwordChanged,
	signUpUser 
} from '../actions/SignUpActions'

class SignUp extends Component {

	handleButtonPress(event) {
		event.preventDefault()
		const { email, password, signUpUser } = this.props
		signUpUser({ email, password }) 
	}

	render() {

		const { 
			email, 
			password,
			error, 
			emailChanged, 
			passwordChanged 
		} = this.props

		return (
			<div className="text-center">
				<div className="page-header">
					<h2>Sign Up</h2>
				</div>
				<div className="row">
					<div className="col-md-4 col-md-offset-4">
						<form className="form well">
							<div className="form-group">
								<label>Enter an Email</label>
								<input 
									type="email" 
									className="form-control"
									placeholder="Email"
									onChange={e => emailChanged(e.target.value)}
									value={email}
								/>
							</div>
							<div className="form-group">
								<label>Create A Password</label>
								<input 
									type="password" 
									className="form-control"
									placeholder="Password"
									onChange={e => passwordChanged(e.target.value)}
									value={password}
								/>
							</div>
							<p>{error}</p>
							<button 
								className="btn btn-primary"
								onClick={this.handleButtonPress.bind(this)}
							>
								Sign Up
							</button>
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

const mapStateToProps = ({ user }) => {

	const { 
		email, 
		password,
		error,
		loading 
	} = user

	return { 
		email, 
		password,
		error,
		loading 
	}

}

export default connect(
	mapStateToProps, { 
		emailChanged,
		passwordChanged,
		signUpUser 
	}
)(SignUp)
