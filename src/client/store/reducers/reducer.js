const initalState = {
  isLoggedIn: false
}

const reducer = (state = initalState, action) => {
  if (action.type === 'USER_LOGIN_ASYNC') {
    const newState = Object.assign({}, state)
    newState.isLoggedIn = action.loginyield.data
    return newState
  }

  return state
}

export default reducer
