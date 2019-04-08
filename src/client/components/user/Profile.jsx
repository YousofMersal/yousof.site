import React from 'react'
import { logOut } from '../../api/UserAPI'
import { Redirect } from 'react-router-dom'

/* TODO
 * Fix redirect issue after logout attempt
 */

const Profile = props => {
  const handleLogOut = () => {
    logOut().then(res => (res.data === 'OK' ? <Redirect to='/' /> : null))
  }
  return <button onClick={handleLogOut}>logout</button>
}

export default Profile
