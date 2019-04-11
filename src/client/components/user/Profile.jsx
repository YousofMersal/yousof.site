import React from 'react'
import { connect } from 'react-redux'
import actionTypes from '../../store/actions/actions'
import { logOut } from '../../api/UserAPI'

const Profile = props => {
  const handleLogOut = () => {
    logOut().then(res =>
      res.data === 'OK' ? props.onSessionStatus() && props.history.push('/') : null
    )
  }
  return <button onClick={handleLogOut}>logout</button>
}

const mapStateToProps = (state, ownProps) => {
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
