import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import store from './store/store'
import { Provider } from 'react-redux'
import './style.scss'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)