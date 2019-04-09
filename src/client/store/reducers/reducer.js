const initalState = {
  isLoggedIn: false
}

const reducer = (state = initalState, action) => {
  if (action.type === 'USER_LOGIN') {
    const newState = Object.assign({}, state)
    newState.isLoggedIn = action.value
    return newState
  }

  return state
}

export default reducer
