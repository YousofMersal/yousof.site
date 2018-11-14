import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Landing from './containers/Landing'
import SingleMovie from './containers/SingleMovie'

export default class MyRoutes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Landing} />
          <Route exact path="/movie/:id" component={SingleMovie} />
        </div>
      </Router>
    )
  }
}
