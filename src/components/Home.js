import React, { Component } from 'react'
import Link from 'react-router-redux-dom-link'

class Home extends Component {

  render() {

    const styles = {
      imageStyle: {
        backgroundImage: 'url("https://goo.gl/3FSSeo")',
        height: 1000,
        backgroundSize: 'cover'
      },
      textStyle: {
        color: '#ECE3DE',
        fontSize: 140,
        fontStyle: 'bold',
        borderColor: '#ECE3DE'
      },
      divStyle: {
        marginTop: 150, 
        backgroundColor: '#2C3012', 
        border: 'none', 
        opacity: 0.9
      }
    }

    const { 
      imageStyle, 
      textStyle,
      divStyle
    } = styles
  
    return (
      <div style={imageStyle} className="row">
        <div className="container-fluid">
          <div className="text-center page-header">
            <h1 style={textStyle}>TipJar</h1>
          </div>
          <div className="row text-center col-sm-6 col-md-3 col-md-offset-2">
            <div className="well" style={divStyle}>
              <h3 style={{color: '#ECE3DE'}}>New to TipJar?</h3>
              <Link to="/sign-up" className="btn btn-success" style={{color: '#ECE3DE'}}>
                Sign Up
              </Link>
            </div>          
          </div>
          <div className="row text-center col-sm-6 col-md-3 col-md-offset-2">
            <div className="well" style={divStyle}>
              <h3 style={{color: '#ECE3DE'}}>Existing account?</h3>
              <Link to="/sign-in" className="btn btn-success" style={{color: '#ECE3DE'}}>
                Sign In
             </Link>
            </div>                    
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
