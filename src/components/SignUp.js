import React, { Component } from 'react'
import { connect } from 'react-redux'
import Link from 'react-router-redux-dom-link'
import { 
	emailChanged, 
	passwordChanged,
	signUpUser 
} from '../actions/userActions'

class SignUp extends Component {

	handleButtonPress(event) {
		event.preventDefault()
		const { email, password, signUpUser } = this.props
		signUpUser({ email, password }) 
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
				Sign Up
			</button>
		)
	}

	render() {

		const { email, password, error, emailChanged, passwordChanged } = this.props

		return (
			<div className="container" style={{paddingTop: 80}}>
				<div className="row justify-content-center">
					<div className="col-sm-4 offset-sm-4 text-center card" style={{padding: 20}}>
						<h1 className="card-title">Sign Up</h1>
							<form className="card-block">
								<div className="form-group">
									<label className="card-text">Enter an Email</label>
									<input 
										type="email" 
										className="form-control"
										placeholder="Email"
										onChange={e => emailChanged(e.target.value)}
										value={email}
									/>
								</div>
								<div className="form-group">
									<label className="card-text">Create A Password</label>
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
									<Link to="/sign-in" style={{color: 'green' }}>
										already have an account? sign in here
							  	</Link>
								</p>
							</form>			
						</div>		
					</div>
					<div className="text-center" style={{marginTop: 25 }}>
						<Link to="/" className="btn btn-success">Home</Link>
					</div>	
			</div>
		)
	}
}

const mapStateToProps = ({ user }) => {

	const { email, password, error, loading } = user

	return { email, password, error, loading }

}

export default connect( 
	mapStateToProps, 
	{ emailChanged, passwordChanged, signUpUser }
)(SignUp)


