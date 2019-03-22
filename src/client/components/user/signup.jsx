import React, { Component } from 'react'
import InputField from './form/InputField'
import { registerUser } from '../../api/UserAPI'

export default class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: { val: '', isValid: null },
      password: { val: '', isValid: null },
      remember: true,
      isValid: false
    }
  }

  onSubmitClickHandler = e => {
    e.preventDefault()
    if (this.state.username.val.length >= 3 && this.state.password.val.length >= 3) {
      const userinfo = {
        username: this.state.username.val,
        password: this.state.password.val,
        remember: this.state.remember
      }
      this.setState({
        username: { val: '' },
        password: { val: '' }
      })
      registerUser(userinfo).then(this.setState({ redirect: true, isValid: null }))
    } else {
      this.setState({ isValid: 'notValid' })
    }
  }

  handleInpChange = e => {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: { val: value }
    })
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
            val={this.state.username.val}
            pasedfunc={this.handleInpChange}
            onKeyPress={this.handleKeyDown}
          />
          <InputField
            type='password'
            name='password'
            val={this.state.password.val}
            pasedfunc={this.handleInpChange}
            onKeyPress={this.handleKeyDown}
          />
        </form>
      </div>
    )
  }
}
