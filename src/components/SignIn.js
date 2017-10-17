import React, { Component } from 'react'
import Link from 'react-router-redux-dom-link'

class SignIn extends Component {
	render() {
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
								/>
							</div>
							<div className="form-group">
								<label>Password</label>
								<input 
									type="password" 
									className="form-control"
									placeholder="Password"
								/>
							</div>
							<button className="btn btn-primary">Sign In</button>
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

export default SignIn