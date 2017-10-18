import React from 'react'
import Link from 'react-router-redux-dom-link'

const NavButton = ({ path, text }) => (
	<li className="nav-item">
	  <Link className="nav-link" to={path}>{text}</Link>
	</li>
)

export { NavButton }