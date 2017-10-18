import React, { Component } from 'react'
import Link from 'react-router-redux-dom-link'

class About extends Component {
	render() {
		return (
      <div className="container" style={{paddingTop: 100}}>
        <div className="row">
          <div className="col-lg-12">
            <hr className="section-heading-spacer"></hr>
            <div className="clearfix"></div>
            <h2 className="section-heading">The TipJar Story...</h2>
            <p className="lead">The idea for TipJar came about after I moved back to the US 
            after having lived abroad in both Europe and Asia. I noticed different
            cultures all viewed the idea of tipping extremely differently, with some cultures not tipping at all.
            Back in Hollywood at a frozen yogurt shop, I saw the tip jar get stolen right off the front counter!
            I've even went in my pocket to tip the valet recently only to realize I had no cash.
            We're living in a social, digital, cashless society, and TipJar will fill the void in 
            the digital social tipping space!</p>
          </div>
          <div className="col-lg-4">
	      		<img className="img-fluid" src="https://goo.gl/eDZsJb" alt="" />
	    		</div>
          <div className="col-lg-4 ml-auto">
	      		<img className="img-fluid" src="https://goo.gl/p98Rp9" alt="" />
	    		</div>
	    		<div className="col-lg-4">
	      		<img className="img-fluid" src="https://goo.gl/hsgD3E" alt="" />
	    		</div>
      	</div>
    	</div>   
		)
	}
}

export default About