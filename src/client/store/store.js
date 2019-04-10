import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers/reducer'
import createSagaMiddleware from 'redux-saga'

//Checks if in dev enviroment. If it is it allows the use of redux dev tools
const devTools =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    : null

const configStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  //If devTools is truty it return a compsite middleware with devtools and sagamiddleware if not only return middleware
  const middleWare = devTools
    ? compose(
        applyMiddleware(sagaMiddleware),
        devTools
      )
    : applyMiddleware(sagaMiddleware)

  //Return object with createStore where reducer and middleWare is passed. runSage is also
  return {
    ...createStore(reducer, middleWare),
    runSaga: sagaMiddleware.run
  }
}

const store = configStore()

export default store
