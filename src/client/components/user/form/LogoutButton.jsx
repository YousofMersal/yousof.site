import React from 'react'
import { logOut } from '../../../api/UserAPI'

const LogoutButton = props => {
  console.log(props)
  const handleLogOut = () => {
    logOut().then(res =>
      res.data === 'OK' ? props.onSessionStatus() && props.history.push('/') : null
    )
  }
  return <button onClick={handleLogOut}>logout</button>
}

export default LogoutButton
