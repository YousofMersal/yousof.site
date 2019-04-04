import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Landing from './containers/Landing'
import SingleMovie from './containers/SingleMovie'
import Nav from './components/Nav'
import Login from './components/user/login'
import SignUp from './components/user/signup'
// import { LoginCheck } from './api/UserAPI'

export default class MyRoutes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedin: false
    }
  }

  componentDidMount() {
    // LoginCheck().then(res => console.log(res))
  }

  render() {
    return (
      <Router>
        <div>
          <Nav isLoggedin={this.state.isLoggedin} />
          <Switch>
            <Route exact path='/movie/:id' component={SingleMovie} />
            <Route exact path='/' component={Landing} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={SignUp} />
          </Switch>
        </div>
      </Router>
    )
  }
}
