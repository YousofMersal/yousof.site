import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './containers/App'

export default class MyRoutes extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={App} />
      </Router>
    )
  }
}
