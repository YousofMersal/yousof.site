const initalState = {
  isLoggedIn: false,
  theme: 'light'
}

const reducer = (state = initalState, action) => {
  let newState = Object.assign({}, state)

  switch (action.type) {
    case 'CHECK_USER_ASYNC':
      newState.isLoggedIn = action.loginYield.data

      return newState
    case 'CHECK_USER_ERROR':
      console.error('[USER LOGIN ERROR] ', action.err)
      return state
    case 'CHANGE_THEME_LIGHT':
      newState.theme = 'light'

      return newState
    case 'CHANGE_THEME_DARK':
      newState.theme = 'dark'

      return newState
    default:
      return state
  }
}

export default reducer
