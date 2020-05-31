import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Switch from '@material-ui/core/Switch'

export default class NavBar extends Component<any, any> {
  onChanceThemeClick = () => {
    this.props.onChanceTheme()
  }

  render() {
    return (
      <nav className='nav'>
        <NavLink to='/'>
          <img
            className='navlogo'
            src={require(this.props.theme === 'dark'
              ? './assets/yousoftware_inverted.svg'
              : './assets/yousoftware.svg')}
            alt=''
          />
        </NavLink>
        <div className='nav-links'>
          {this.props.isLoggedin ? (
            <NavLink to='/profile'>Profile</NavLink>
          ) : (
            [
              <NavLink to='/login' className='login' key='1'>
                Log In
              </NavLink>,
              <NavLink to='/signup' className='signup' key='2'>
                Sign Up
              </NavLink>
            ]
          )}
          <NavLink to='/tests'>Test</NavLink>
          <Switch
            color='primary'
            checked={this.props.theme === 'dark' ? true : false}
            onChange={() => this.props.themeChange(this.props.theme)}
          />
        </div>
      </nav>
    )
  }
}
