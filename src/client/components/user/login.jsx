import React, { Component } from 'react'
import { LoginCheck } from '../../api/UserAPI'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      UserName: '',
      Password: '',
      remember: true
    }
  }

  handleInpChange = event => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    const userinfo = { ...this.state }
    LoginCheck(userinfo)
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className='formCont'>
            <label htmlFor='UserName'>User Name</label>
            <input
              type='text'
              name='UserName'
              placeholder='User Name'
              value={this.state.UserName}
              id='UserName'
              onChange={this.handleInpChange}
            />

            <label htmlFor='pass'>Password</label>
            <input
              type='password'
              placeholder='Password'
              name='Password'
              id='Password'
              value={this.state.Password}
              onChange={this.handleInpChange}
            />

            <button type='submit'>Login</button>
          </div>

          <div className='rememberme'>
            <label htmlFor='remember'>Remember Me</label>
            <input
              type='checkbox'
              name='remember'
              checked={this.state.remember}
              onChange={this.handleInpChange}
            />
          </div>
        </form>
      </div>
    )
  }
}
