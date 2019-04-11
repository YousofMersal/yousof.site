import React, { Component } from 'react'
import InputField from './form/InputField'
import { Redirect } from 'react-router-dom'
import { registerUser } from '../../api/UserAPI'

export default class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: { val: '', isValid: null },
      password: { val: '', isValid: null },
      remember: true,
      isTaken: false,
      redirect: null
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
      //Redirects user if creation of user was succesesful while settings isValid to false for css
      registerUser(userinfo).then(res => {
        if (res.data === 'Created') {
          this.setState({ isTaken: false, redirect: true })
        } else if (res.data === 'Name in use') {
          this.setState({ isTaken: true, redirect: false })
        } else {
          alert('Something went wrong while creating user please try again later')
        }
      })
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
    return this.state.redirect === true ? (
      <Redirect to='/login' />
    ) : (
      <div>
        <form onSubmit={this.onSubmitClickHandler}>
          <div>
            {this.state.isTaken ? <h3>Name is already taken</h3> : null}
            <InputField
              className={this.state.isTaken ? 'isTaken' : null}
              type='text'
              name='username'
              val={this.state.username.val}
              pasedfunc={this.handleInpChange}
              onKeyPress={this.handleKeyDown}
            />
          </div>
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
