const initalState = {
  isLoggedIn: false
}

const reducer = (state = initalState, action) => {
  if (action.type === 'CHECK_USER_ASYNC') {
    const newState = Object.assign({}, state)
    newState.isLoggedIn = action.loginYield.data
    return newState
  } else if (action.type === 'CHECK_USER_ERROR') {
    console.log('[USER LOGIN ERROR] ', action.err)
  }

  return state
}

export default reducer
