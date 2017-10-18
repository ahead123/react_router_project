import React from 'react'
import Link from 'react-router-redux-dom-link'

const styles = {
  textStyle: {
    color: 'white'
  }
}

const { textStyle } = styles

const ListButton = ({ path, text }) => (

	<li className="list-inline-item">
  	<button className="btn btn-secondary btn-lg">                  
   	 <Link to={path} className="network-name" style={textStyle}>{text}</Link>
  	</button>
	</li>
)

export { ListButton }