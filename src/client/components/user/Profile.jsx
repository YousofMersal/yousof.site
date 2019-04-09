import React from 'react'
import { logOut } from '../../api/UserAPI'

const Profile = props => {
  const handleLogOut = () => {
    logOut().then(res => (res.data === 'OK' ? props.history.push('/') : null))
  }
  return <button onClick={handleLogOut}>logout</button>
}

export default Profile
