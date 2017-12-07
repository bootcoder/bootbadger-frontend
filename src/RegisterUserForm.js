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
            <option value='Jenna'>Jenna</option>
            <option value='Olivia'>Olivia</option>
            <option value='Shannon'>Shannon</option>
            <option value='Kenn'>Kenn</option>
            <option value='Loraine'>Loraine</option>
            <option value='Ally'>Ally</option>
            <option value='James'>James</option>
            <option value='Hunter'>Hunter</option>
            <option value='Caroline'>Caroline</option>
            <option value='Matthew'>Matthew</option>
            <option value='May'>May</option>
            <option value='Sar'>Sar</option>
            <option value='Kam'>Kam</option>
            <option value='Anthony'>Anthony</option>
            <option value='Shambhavi'>Shambhavi</option>
            <option value='Quynh'>Quynh</option>
            <option value='Josh'>Josh</option>
            <option value='Dillon'>Dillon</option>
            <option value='Joe'>Joe</option>
            <option value='Roger'>Roger</option>
            <option value='Rebekah'>Rebekah</option>
            <option value='Ken'>Ken</option>
            <option value='Mark'>Mark</option>
          </select>
          <input type='submit' value='Login' />
        </form>
      </div>
    )
  }
}

export default RegisterUserForm
