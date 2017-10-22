import React, { Component } from 'react'
import { connect } from 'react-redux'
import Link from 'react-router-redux-dom-link'
import LoadingBar from 'react-redux-loading-bar'
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import { 
	emailChanged, 
	passwordChanged,
	signUpUser,
	signUpWithGoogle
} from '../actions/userActions'

class SignUp extends Component {

	handleGoogleSignUp(event) {
		event.preventDefault()
		this.props.signUpWithGoogle()
	}

	handleButtonPress(event) {
		event.preventDefault()
		const { email, password, signUpUser } = this.props
		signUpUser({ email, password }) 
	}

	renderButton() {
		const { loading, showLoading, hideLoading } = this.props
		if (loading) {
			showLoading()
			return (
				<div className="col-sm-12">
					<LoadingBar 
            showFastActions 
            style={{ 
              backgroundColor: '#db3236', 
              height: '5px' 
            }}
          />
					<p style={{marginTop: 25}}>Loading...</p>
				</div>
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
					<div className="col-sm-6 text-center card" style={{padding: 20}}>
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
									Or...
								</p>
								<p style={{marginTop: 25 }}>
									<button 
										className="btn"
										style={{backgroundColor: '#db3236', color: 'white'}}
										onClick={this.handleGoogleSignUp.bind(this)}
									>
										Sign Up Using Google
							  	</button>
								</p>
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
	{ emailChanged, 
		passwordChanged, 
		signUpUser, 
		signUpWithGoogle,
		showLoading,
		hideLoading 
	}
)(SignUp)


