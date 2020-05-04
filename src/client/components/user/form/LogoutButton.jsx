import React from 'react'
import { logOut } from '../../../api/UserAPI'
import Button from '@material-ui/core/Button'

const LogoutButton = props => {
  const handleLogOut = () => {
    logOut().then(res =>
      res.data === 'OK' ? props.onSessionStatus() && props.history.push('/') : null
    )
  }
  return (
    <Button color='primary' variant='outlined' onClick={handleLogOut}>
      logout
    </Button>
  )
}

export default LogoutButton
