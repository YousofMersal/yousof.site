import React, { Component } from 'react'
import { connect } from 'react-redux'
import actionTypes from '../../store/actions/actions'
import LogoutButton from './form/LogoutButton'
import ProfileCard from './ProfileCard'

class Profile extends Component {
  render() {
    return (
      <div>
        <ProfileCard />
        <LogoutButton
          history={this.props.history}
          onSessionStatus={this.props.onSessionStatus}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSessionStatus: () => dispatch(actionTypes.sessionStatus())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)
