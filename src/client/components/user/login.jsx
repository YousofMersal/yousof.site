import React, { Component } from 'react'
import InputField from './form/InputField'
import { LoginCheck } from '../../api/UserAPI'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      remember: true,
      isValid: null
    }
  }

  handleInpChange = e => {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  onSubmitClickHandler = e => {
    e.preventDefault()
    if (this.state.username.length >= 3 && this.state.password.length >= 3) {
      const userinfo = {
        username: this.state.username,
        password: this.state.password,
        remember: this.state.remember
      }
      this.setState({
        username: '',
        password: ''
      })
      LoginCheck(userinfo).then(this.setState({ redirect: true, isValid: null }))
    } else {
      this.setState({ isValid: 'notValid' })
    }
  }

  handleKeyDown = e => {
    if (e.key === 'Enter') {
      this.onSubmitClickHandler(e)
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitClickHandler}>
          <InputField
            type='text'
            name='username'
            val={this.state.username}
            pasedfunc={this.handleInpChange}
            onKeyPress={this.handleKeyDown}
          />
          <InputField
            type='password'
            name='password'
            val={this.state.password}
            pasedfunc={this.handleInpChange}
            onKeyPress={this.handleKeyDown}
          />
          <div className='rememberme'>
            <label htmlFor='remember'>Remember Me</label>
            <input
              type='checkbox'
              name='remember'
              checked={this.state.remember}
              onChange={this.handleInpChange}
            />
          </div>
          {/* <div className='formCont'>
            <label htmlFor='UserName'>User Name</label>
            <input
              type='text'
              name='UserName'
              placeholder='User Name'
              value={this.state.username}
              id='UserName'
              onChange={this.handleInpChange}
            />

            <label htmlFor='pass'>Password</label>
            <input
              type='password'
              placeholder='Password'
              name='Password'
              id='Password'
              value={this.state.password}
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
          </div> */}
        </form>
      </div>
    )
  }
}
