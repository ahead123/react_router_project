import React, { Component } from 'react'
import Link from 'react-router-redux-dom-link'

class About extends Component {
	render() {
		return (
			<section className="content-section-a">
	      <div className="container">
	        <div className="row">
	          <div className="col-lg-5 ml-auto">
	            <hr className="section-heading-spacer"></hr>
	            <div className="clearfix"></div>
	            <h2 className="section-heading">Death to the Stock Photo:Special Thanks</h2>
	            <p className="lead">A special thanks to
	              <a target="_blank" href="http://join.deathtothestockphoto.com/">Death to the Stock Photo</a>
	              for providing the photographs that you see in this template. Visit their website to become a member.</p>
	          </div>
	          <div className="col-lg-5 mr-auto"></div>
        	</div>
      	</div>
    	</section>
		)
	}
}

export default About