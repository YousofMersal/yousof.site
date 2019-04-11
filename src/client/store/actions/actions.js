const USER_LOGIN = 'USER_LOGIN'
const USER_LOGOUT = 'USER_LOGOUT'
const CHECK_USER = 'CHECK_USER'

const userLogin = () => {
  return {
    type: USER_LOGIN
  }
}

const userLogout = response => {
  return {
    type: USER_LOGOUT,
    value: response.data
  }
}

const sessionStatus = () => {
  return {
    type: CHECK_USER
  }
}

export default { USER_LOGIN, USER_LOGOUT, userLogin, userLogout, sessionStatus }
