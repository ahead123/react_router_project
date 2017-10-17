import React, { Component } from 'react'
import Link from 'react-router-redux-dom-link'

class About extends Component {
	render() {
		return (
			<div>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
				</ul>
				<div>
					<h1>About</h1>
				</div>
			</div>
		)
	}
}

export default About