import React, {Component} from 'react'

class LoginForm extends Component {
  constructor () {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
  }

  handleSubmit (event) {
    event.preventDefault()
    this.props.handleLogin()
  }

  handleEmailChange (event) {
    this.props.updateEmail(event.target.value)
  }

  handlePasswordChange (event) {
    this.props.updatePassword(event.target.value)
  }

  render () {
    return (
      <div className='LoginForm'>
        <form onSubmit={this.handleSubmit}>
          Email: <input
            onChange={this.handleEmailChange}
            type='email'
            value={this.props.loginEmail}
          />
          Password: <input
            onChange={this.handlePasswordChange}
            type='password'
            value={this.props.loginPassword}
          />
          <input type='submit' value='Login' />
        </form>
      </div>
    )
  }
}

export default LoginForm
