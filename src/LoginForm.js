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
  }

  handleEmailChange (event) {
    this.props.updateLoginEmail(event.target.value)
  }

  handlePasswordChange (event) {
    this.props.updateLoginPassword(event.target.value)
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Email: <input onChange={this.handleEmailChange} type='text' value={this.props.loginEmail} />
        Password: <input onChange={this.handlePasswordChange} type='password' value={this.props.loginPassword} />
        </form>
      </div>
    )
  }
}

export default LoginForm
