import React, { Component } from 'react'
import logo from './logo.svg'
import LoginForm from './LoginForm'
import RegisterUserForm from './RegisterUserForm'
import './App.css'

class App extends Component {
  constructor () {
    super()

    this.state = {
      loginEmail: '',
      loginPassword: '',
      loginName: '',
      jwtToken: window.localStorage.getItem('authToken'),
      showLoginForm: false,
      showCreateForm: true
    }

    this.updateLoginEmail = this.updateLoginEmail.bind(this)
    this.updateLoginPassword = this.updateLoginPassword.bind(this)
    this.handleUserLoginRequest = this.handleUserLoginRequest.bind(this)
    this.renderAuth = this.renderAuth.bind(this)
  }

  updateLoginEmail (email) {
    this.setState({loginEmail: email})
  }

  updateLoginPassword (password) {
    this.setState({loginPassword: password})
  }

  handleUserLoginRequest () {
    const appTarget = this
    const payload = `?boot[email]=${this.state.loginEmail}&boot[password]=${this.state.loginPassword}`
    window.fetch('https://bootbadger.herokuapp.com/sessions' + payload, {
      method: 'POST'
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      appTarget.setState({
        loginPassword: '',
        jwtToken: data.token
      })
      window.localStorage.setItem('authToken', data.token)
    }).catch(data => {
      window.alert(data)
    })
  }

  renderAuth () {
    if (this.state.showLogin === true) {
      return (
        <LoginForm
          email={this.state.loginEmail}
          password={this.state.loginPassword}
          updateLoginEmail={this.updateLoginEmail}
          updateLoginPassword={this.updateLoginPassword}
          handleUserLoginRequest={this.handleUserLoginRequest}
        />
      )
    }
    if (this.state.showCreateForm === true) {
      return (
        <RegisterUserForm
          loginName={this.state.loginName}
          loginEmail={this.state.loginEmail}
          loginPassword={this.state.loginPassword}
          updateLoginName={this.updateLoginName}
          updateLoginEmail={this.updateLoginEmail}
          updateLoginPassword={this.updateLoginPassword}
        />
      )
    }
  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>BootBadger</h1>
        </header>
        {this.renderAuth()}
      </div>
    )
  }
}

export default App
