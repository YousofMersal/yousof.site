import React, { Component } from 'react'
import Input from '../components/user/form/InputField'

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  handleInp = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()

    const formData = {
      username: this.state.username,
      password: this.state.password
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          value={this.state.username}
          onChange={this.state.handleInp}
          name='username'
        />
      </form>
    )
  }
}
