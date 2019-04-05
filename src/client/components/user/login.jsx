import React, { Component } from 'react'
import InputField from './form/InputField'
import { loginCheck, isloggedin } from '../../api/UserAPI'

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

  handleCheck = () => {
    isloggedin().then(res => console.log(res))
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
      loginCheck(userinfo)
        .then(res => {
          return this.setState({ redirect: true, isValid: null })
        })
        .catch(err => console.log(err))
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
        <div>
          <button type='submit' onClick={this.handleCheck}>
            Test longin check
          </button>
        </div>
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
        </form>
      </div>
    )
  }
}
