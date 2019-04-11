const USER_LOGIN = 'USER_LOGIN'
const USER_LOGOUT = 'USER_LOGOUT'

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

export { USER_LOGIN, USER_LOGOUT, userLogin, userLogout }
