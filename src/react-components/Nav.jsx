import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
  render() {
    return (
      <nav className="nav">
        <Link to="/">
          <img className="navlogo" src={require('./assets/koala.svg')} alt="" />
        </Link>
        <div className="nav-links">
          <Link to="/profile">Profile</Link>
        </div>
      </nav>
    )
  }
}
