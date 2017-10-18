import React from 'react'
import '../../css/landingPage/landing-page.css'

const Story = ({ heading, lead, imageURL, order }) => (
	<div className="container">
	  <div className="row">
	    <div className={order}>
	      <hr className="section-heading-spacer"></hr>
	      <div className="clearfix"></div>
	      <h2 className="section-heading">{heading}</h2>
	      <p className="lead">{lead}</p>
	    </div>
	    <div className="col-lg-5 ml-auto order-lg-1">
	      <img className="img-fluid" src={imageURL} alt="" />
	    </div>
	  </div>
	</div>
)

export { Story }