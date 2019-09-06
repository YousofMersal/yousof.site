import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Landing from './containers/Landing'
import SingleMovie from './containers/SingleMovie'
import Nav from './components/Nav'
import Login from './components/user/LoginForm'
import SignUp from './components/user/SignupForm'
import { connect } from 'react-redux'
import Profile from './components/user/Profile'
import actionTypes from './store/actions/actions'

class MyRoutes extends Component {
  componentDidMount() {
    this.props.onLogin()
  }

  render() {
    return (
      <Router>
        <div id='app-root' className={'theme-' + this.props.theme}>
          <Nav
            isLoggedin={this.props.isLoggedIn}
            themeChange={this.props.onThemeChange}
            theme={this.props.theme}
          />
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
    isLoggedIn: state.isLoggedIn,
    theme: state.theme
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogin: () => dispatch(actionTypes.sessionStatus()),
    onThemeChange: currentTheme => dispatch(actionTypes.changeTheme(currentTheme))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyRoutes)
