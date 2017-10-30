import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import LoadingBar from 'react-redux-loading-bar'
import {
  firebaseConnect,
  dataToJS,
  pathToJS
} from 'react-redux-firebase'
import { logOutUser, fetchUserProfile } from '../actions/userActions'
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import { getCurrentUser } from '../firebase'

class UserProfile extends Component {

	componentWillMount() {
    this.props.fetchUserProfile()
	}

	handleClick(event) {
    event.preventDefault()
    this.props.firebase.logout()
		this.props.logOutUser()

	}

  showProfile() {
    const { 
      showLoading, 
      hideLoading, 
      loading, 
      email,
      photoURL,
      profile 
    } = this.props

    if(loading){
      
      return (
        <div>
          <LoadingBar 
            showFastActions 
            style={{ 
              backgroundColor: 'blue', 
              height: '5px' 
            }}
          />
          <p>Fetching profile...</p>
        </div>
      )
    } 

   
    
    return (
      <div className="col-lg-12">
        {
          this.props.profile!=null ? <div className="center-block"><img className="img-responsive rounded-circle" height="100" width="100" src={profile.avatarUrl} /></div> : ""
        }
        <h2 className="section-heading">
        {
          email ? email.split('@')[0] : "User Profile"
        }
        </h2>
        <p className="lead">User Stats</p>
        <button 
          onClick={this.handleClick.bind(this)}
          className="btn btn-primary"
        >
          Sign Out
        </button>
      </div>
    )
  }

	render() {
    console.log('firebase props',this.props)
		return (
      <div className="container" style={{paddingTop: 100}}>
        <div className="row justify-content-center">
          <div className="col-lg-12 text-center">
            <hr className="section-heading-spacer" style={{width: '100%'}}></hr>
            <div className="clearfix"></div>
            {this.showProfile()}
          </div>			                   
      	</div>
    	</div>
		)
	}
}

const mapStateToProps = (state) => {
	const { loading, user, email } = state.user
	return { 
    loading, 
    user, 
    email,
    users: dataToJS(state.firebase, 'users'),
    auth: pathToJS(state.firebase, 'auth'),
    profile: pathToJS(state.firebase, 'profile') 
  }
}	

export default 
  compose(
    firebaseConnect(['users','auth','profile']),
    connect(mapStateToProps, { 
    	logOutUser, 
      fetchUserProfile, 
      showLoading,
      hideLoading 
    }
  )
)(UserProfile)


