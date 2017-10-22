import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { store } from '../store'

class NotFound extends Component {

	handleClick(event) {
		event.preventDefault()
		store.dispatch(push('/'))
	}

	render() {
		return (
			  <div className="container" style={{paddingTop: 100}}>
			    <div className="row">
			      <div className="col-lg-12">
			        <hr className="section-heading-spacer"></hr>
			        <div className="clearfix"></div>
			        <h2 className="section-heading">404</h2>
			        <p className="lead">Uh Oh...Well this is awkward...</p>
			        <button 
			        	onClick={this.handleClick.bind(this)}
			        	className="btn btn-success"
			        >
			        	Home
			        </button>
			      </div>			                   
			  	</div>
				</div>
		)
	}
}

export default NotFound
