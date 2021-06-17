const USER_LOGIN = 'USER_LOGIN'
const USER_LOGOUT = 'USER_LOGOUT'
const CHECK_USER = 'CHECK_USER'
const CHANGE_THEME_DARK = 'CHANGE_THEME_DARK'
const CHANGE_THEME_LIGHT = 'CHANGE_THEME_LIGHT'

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

const changeTheme = currentTheme => {
  if (currentTheme === 'light') {
    return {
      type: CHANGE_THEME_DARK
    }
  } else if (currentTheme === 'dark') {
    return {
      type: CHANGE_THEME_LIGHT
    }
  }
}

const exports = {
  USER_LOGIN,
  USER_LOGOUT,
  userLogin,
  userLogout,
  sessionStatus,
  changeTheme
}

export default exports
