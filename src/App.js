import React, { Component } from 'react'
import logo from './logo.svg'
import LoginForm from './LoginForm'
import './App.css'

class App extends Component {
  constructor () {
    super()

    this.state = {
      loginEmail: '',
      loginPassword: '',
      jwtToken: null
    }

    this.updateLoginEmail = this.updateLoginEmail.bind(this)
    this.updateLoginPassword = this.updateLoginPassword.bind(this)
  }

  updateLoginEmail (email) {
    this.setState({loginEmail: email})
  }

  updateLoginPassword (password) {
    this.setState({loginPassword: password})
  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
        <h1 className='App-title'>BootBadger</h1>
        </header>
        <LoginForm
          email={this.state.loginEmail}
          password={this.state.loginPassword}
          updateLoginEmail={this.updateLoginEmail}
          updateLoginPassword={this.updateLoginPassword}
        />
      </div>
    )
  }
}

export default App
