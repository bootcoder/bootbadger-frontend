import React, {Component} from 'react'

class RegisterUserForm extends Component {
  constructor () {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
  }

  handleSubmit (event) {
    event.preventDefault()
    this.props.handleRegistration()
  }

  handleEmailChange (event) {
    this.props.updateEmail(event.target.value)
  }

  handlePasswordChange (event) {
    this.props.updatePassword(event.target.value)
  }

  handleNameChange (event) {
    this.props.updateName(event.target.value)
  }

  render () {
    return (
      <div className='RegisterUserForm'>
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
          <select name='loginName' value={this.props.loginName} onChange={this.handleNameChange}>
            {this.props.pendingSignup.map((boot) => {
              return <option value={boot.name}>{boot.name}</option>
            })}
          </select>
          <input type='submit' value='Login' />
        </form>
      </div>
    )
  }
}

export default RegisterUserForm
