const initalState = {
  isLoggedIn: false
}

const reducer = (state = initalState, action) => {
  if (action.type === 'USER_LOGIN') {
    console.log('USER_LOGIN hit')
    return state
  }

  return state
}

export default reducer
