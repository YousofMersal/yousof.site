import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
  render() {
    // console.log(this.props.isLoggedin)

    return (
      <nav className='nav'>
        <Link to='/'>
          <img className='navlogo' src={require('./assets/koala.svg')} alt='' />
        </Link>
        <div className='nav-links'>
          {this.props.isLoggedin ? (
            <Link to='/profile'>Profile</Link>
          ) : (
            [
              <Link to='/login' className='login' key='1'>
                Log In
              </Link>,
              <Link to='/signup' className='signup' key='2'>
                Sign Up
              </Link>
            ]
          )}
          <Link to='/tests'>Test</Link>
        </div>
      </nav>
    )
  }
}
