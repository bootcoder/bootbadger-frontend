import React, { Component } from 'react'
import logo from './logo.svg'
import LoginForm from './LoginForm'
import RegisterUserForm from './RegisterUserForm'
import BootBadger from './BootBadger'
import './App.css'

class App extends Component {
  constructor () {
    super()

    this.state = {
      authToken: window.localStorage.getItem('authToken'),
      boots: [],
      loginEmail: '',
      loginName: 'Jenna',
      loginPassword: '',
      showLogin: false,
      showRegistration: false,
      showBoot: null
    }

    this.updateEmail = this.updateEmail.bind(this)
    this.updatePassword = this.updatePassword.bind(this)
    this.updateName = this.updateName.bind(this)
    this.renderAuth = this.renderAuth.bind(this)
    this.renderApp = this.renderApp.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleRegistration = this.handleRegistration.bind(this)
    this.handleShowAll = this.handleShowAll.bind(this)
    this.handleShowBoot = this.handleShowBoot.bind(this)
    this.handleShowLogin = this.handleShowLogin.bind(this)
    this.handleShowRegistration = this.handleShowRegistration.bind(this)
    this.handleSloganSubmit = this.handleSloganSubmit.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  updateName (name) {
    this.setState({loginName: name})
  }

  updateEmail (email) {
    this.setState({loginEmail: email})
  }

  updatePassword (password) {
    this.setState({loginPassword: password})
  }

  handleLogin () {
    const appTarget = this
    const payload = `?session[email]=${this.state.loginEmail}&boot[password]=${this.state.loginPassword}`
    window.fetch('https://bootbadger.herokuapp.com/sessions' + payload, {
      method: 'POST'
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      appTarget.setState({
        loginPassword: '',
        authToken: data.token,
        showLogin: false
      })
      window.localStorage.setItem('authToken', data.token)
      window.localStorage.setItem('name', data.name)
    }).catch(data => {
      window.alert(data)
    })
  }

  handleLogout () {
    window.localStorage.removeItem('authToken')
    this.setState({authToken: null})
  }

  handleRegistration () {
    const appTarget = this
    const payload = `?boot[email]=${this.state.loginEmail}&boot[password]=${this.state.loginPassword}&boot[name]=${this.state.loginName}`
    window.fetch('https://bootbadger.herokuapp.com/boots' + payload, {
      method: 'POST'
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      appTarget.setState({
        loginPassword: '',
        authToken: data.token,
        showRegistration: false
      })
      window.localStorage.setItem('authToken', data.token)
      window.localStorage.setItem('name', data.name)
    }).catch(data => {
      window.alert(data)
    })
  }

  handleShowRegistration () {
    this.setState({showRegistration: true, showLogin: false})
  }

  handleShowLogin () {
    this.setState({showRegistration: false, showLogin: true})
  }

  handleShowAll () {
    this.setState({showBoot: null})
  }

  handleShowBoot (showBoot) {
    this.setState({showBoot})
  }

  handleSloganSubmit (boot, slogan) {

  }

  componentDidMount () {
    const appTarget = this
    window.fetch('https://bootbadger.herokuapp.com/boots')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      appTarget.setState({
        boots: data
      })
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
          updateEmail={this.updateEmail}
          updatePassword={this.updatePassword}
          handleLogin={this.handleLogin}
        />
      )
    }
    if (this.state.showRegistration === true) {
      return (
        <RegisterUserForm
          loginName={this.state.loginName}
          loginEmail={this.state.loginEmail}
          loginPassword={this.state.loginPassword}
          updateName={this.updateName}
          updateEmail={this.updateEmail}
          updatePassword={this.updatePassword}
          handleRegistration={this.handleRegistration}
        />
      )
    }
    if (this.state.showRegistration === false && this.state.showLogin === false) {
      return (
        <div>
          <button onClick={this.handleShowRegistration}>Register</button>
          <button onClick={this.handleShowLogin}>Login</button>
        </div>
      )
    }
  }

  renderApp () {
    return (
      <div>
        <button onClick={this.handleLogout}>Logout</button>
        <button onClick={this.handleShowAll}>Show All Boots</button>
        <BootBadger
          boots={this.state.boots}
          loginName={this.state.loginName}
          showBoot={this.state.showBoot}
          handleShowAll={this.handleShowAll}
          handleShowBoot={this.handleShowBoot}
        />
      </div>
    )
  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>BootBadger</h1>
        </header>
        {this.state.authToken === null ? this.renderAuth() : this.renderApp()}
      </div>
    )
  }
}

export default App
