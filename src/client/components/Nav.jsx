import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class NavBar extends Component {
  render() {
    // console.log(this.props.isLoggedin)

    return (
      <nav className='nav'>
        <NavLink to='/'>
          <img className='navlogo' src={require('./assets/koala.svg')} alt='' />
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
        </div>
      </nav>
    )
  }
}
