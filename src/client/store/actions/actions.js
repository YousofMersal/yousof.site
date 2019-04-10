const USER_LOGIN = 'USER_LOGIN'
const USER_LOGOUT = 'USER_LOGOUT'

const userLogin = value => {
  return {
    type: USER_LOGIN,
    value: value.data
  }
}

export { USER_LOGIN, USER_LOGOUT, userLogin }
