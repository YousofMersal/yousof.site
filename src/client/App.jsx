import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Landing from './containers/Landing'
import SingleMovie from './containers/SingleMovie'
import Nav from './components/Nav'
import Login from './components/user/login'
import SignUp from './components/user/signup'
import { connect } from 'react-redux'
import { isloggedin } from './api/UserAPI'
import Profile from './components/user/Profile'

class MyRoutes extends Component {
  componentDidMount() {
    isloggedin().then(res => {
      this.props.onLogin(res)
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Nav isLoggedin={this.props.isLoggedIn} />
          <Switch>
            <Route exact path='/movie/:id' component={SingleMovie} />
            <Route exact path='/' component={Landing} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/profile' component={Profile} />
          </Switch>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = state => {
  return {
    ...state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogin: res => dispatch({ type: 'USER_LOGIN', value: res.data })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyRoutes)
