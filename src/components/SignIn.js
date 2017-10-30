import React, { Component } from 'react'
import Link from 'react-router-redux-dom-link'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading-bar'
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import { 
	signInUser, 
	emailChanged, 
	passwordChanged, 
	googleSignIn 
} from '../actions/userActions'
import { getCurrentUser } from '../firebase'

class SignIn extends Component {

	handleButtonPress(event) {
		event.preventDefault()
		const { email, password } = this.props
		this.props.signInUser({ email, password })
	}

	handleGoogleSignIn(event) {
		event.preventDefault()
		this.props.googleSignIn()
	}

	renderButton() {
		const { showLoading, hideLoading, loading } = this.props
		if (loading) {
			showLoading()
			return (
				<div>
					<LoadingBar 
            showFastActions 
            style={{ 
              backgroundColor: 'blue', 
              height: '5px' 
            }}
          />
					<p>Loading...</p>
				</div>
			)
		}
		hideLoading()
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
			email, 
			password, 
			error, 
			emailChanged, 
			passwordChanged 
		} = this.props
			
		return (
			<div className="container" style={{paddingTop: 80}}>
				<div className="row justify-content-center">
					<div className="col-sm-6 text-center card" style={{padding: 20}}>
						<h1 className="card-title">Sign In</h1>
							<form className="card-block">
								<div className="form-group">
									<label className="card-text">Enter Your Email</label>
									<input 
										type="email" 
										className="form-control"
										placeholder="Email"
										onChange={e => emailChanged(e.target.value)}
										value={email}
									/>
								</div>
								<div className="form-group">
									<label className="card-text">Enter Your Password</label>
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
											onClick={this.handleGoogleSignIn.bind(this)}
										>
											Sign In Using Google
								  	</button>
									</p>
								<p style={{marginTop: 25 }}>
									<Link to="/sign-up" style={{color: 'green' }}>
										First time? sign up here
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

const maptStateToProps = ({ user }) => {
	const { email, password, error, loading } = user
	return { email, password, error, loading }
}

export default connect(maptStateToProps, { 
	signInUser, 
	emailChanged, 
	passwordChanged, 
	showLoading, 
	hideLoading, 
	googleSignIn  
})(SignIn)

