import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading-bar'
import { logOutUser, fetchUserProfile } from '../actions/userActions'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

class UserProfile extends Component {

	componentWillMount() {
    this.props.fetchUserProfile()
	}

	handleClick() {
		this.props.logOutUser()
	}

  showProfile() {
    const { showLoading, hideLoading, loading, email } = this.props
    if(loading){
      showLoading()
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

    hideLoading()
    
    return (
      <div className="col-lg-12">
        <h2 className="section-heading">{email ? email.split('@')[0] : 'User Profile'}</h2>
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
    console.log('this.props userprofile',this.props)
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
	return { loading, user, email }
}	

export default connect(mapStateToProps, { 
	logOutUser, 
  fetchUserProfile, 
  showLoading,
  hideLoading 
}
)(UserProfile)


