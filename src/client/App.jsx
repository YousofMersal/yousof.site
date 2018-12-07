import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Landing from './containers/Landing'
import SingleMovie from './containers/SingleMovie'
import Nav from './components/Nav'

export default class MyRoutes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Route exact path="/movie/:id" component={SingleMovie} />
          <Route exact path="/" component={Landing} />
        </div>
      </Router>
    )
  }
}
