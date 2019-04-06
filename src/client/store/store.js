import { createStore } from 'redux'
import reducer from '../reducers/reducer'

const devTools =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    : null

const store = createStore(reducer, devTools)

export default store
