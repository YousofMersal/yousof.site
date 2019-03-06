import React, { Component } from 'react'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      UserName: '',
      Email: '',
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

  render() {
    return (
      <div>
        <form action='/user/login' method='post'>
          <div className='avatarCont'>
            <img src='default.png' alt='Avatar' className='avatar' />
          </div>

          <div className='formCont'>
            <label htmlFor='uname'>User Name</label>
            <input
              type='text'
              name='uname'
              placeholder='User Name'
              id='uname'
              onChange={this.handleInpChange}
            />

            <label htmlFor='pass'>Password</label>
            <input
              type='password'
              placeholder='Password'
              name='pass'
              id='password'
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
