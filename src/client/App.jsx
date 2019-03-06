import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Landing from './containers/Landing'
import SingleMovie from './containers/SingleMovie'
import Nav from './components/Nav'
import Login from './components/user/login'

export default class MyRoutes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedin: false
    }
  }

  componentDidMount() {}

  render() {
    return (
      <Router>
        <div>
          <Nav isLoggedin={this.state.isLoggedin} />
          <Route exact path='/movie/:id' component={SingleMovie} />
          <Route exact path='/' component={Landing} />
          <Route exact path='/login' component={Login} />
        </div>
      </Router>
    )
  }
}
