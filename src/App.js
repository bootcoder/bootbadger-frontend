import React, { Component } from 'react'
import logo from './dbc.png'
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
      loginName: window.localStorage.getItem('name'),
      loginPassword: '',
      pendingSignup: [],
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
    this.handleRefreshBoots = this.handleRefreshBoots.bind(this)
    this.handleSloganUpVote = this.handleSloganUpVote.bind(this)
    this.handleSloganDownVote = this.handleSloganDownVote.bind(this)
    this.handlePendingSignup = this.handlePendingSignup.bind(this)
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

  componentDidMount () {
    this.handleRefreshBoots()
    this.handlePendingSignup()
  }

  handleRefreshBoots () {
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

  handlePendingSignup () {
    const appTarget = this
    window.fetch('https://bootbadger.herokuapp.com/sessions/list')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      appTarget.setState({
        pendingSignup: data
      })
    }).catch(data => {
      window.alert(data)
    })
  }

  handleSloganUpVote (bootID, sloganID) {
    const appTarget = this
    const payload = `?vote[token]=${this.state.authToken}`
    window.fetch(`https://bootbadger.herokuapp.com/boots/${bootID}/slogans/${sloganID}/votes` + payload, {
      method: 'POST'
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      appTarget.handleRefreshBoots()
    }).catch(data => {
      window.alert(data)
    })
  }

  handleSloganDownVote (bootID, sloganID) {
    const appTarget = this
    const payload = `?vote[token]=${this.state.authToken}`
    window.fetch(`https://bootbadger.herokuapp.com/boots/${bootID}/slogans/${sloganID}/votes` + payload, {
      method: 'PUT'
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      appTarget.handleRefreshBoots()
    }).catch(data => {
      window.alert(data)
    })
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
        loginName: data.name,
        authToken: data.token,
        showLogin: false
      })
      window.localStorage.setItem('authToken', data.token)
      window.localStorage.setItem('name', data.name)
    }).catch(data => {
      window.alert(data)
    })
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
        loginName: data.name,
        showRegistration: false
      })
      window.localStorage.setItem('authToken', data.token)
      window.localStorage.setItem('name', data.name)
    }).catch(data => {
      window.alert(data)
    })
  }

  handleSloganSubmit (bootID, slogan) {
    const encodedSlogan = encodeURIComponent(slogan)
    const appTarget = this
    const payload = `?slogan[token]=${this.state.authToken}&slogan[body]=${encodedSlogan}`
    window.fetch(`https://bootbadger.herokuapp.com/boots/${bootID}/slogans` + payload, {
      method: 'POST'
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      appTarget.handleRefreshBoots()
    }).catch(data => {
      window.alert(data)
    })
  }

  handleLogout () {
    window.localStorage.removeItem('authToken')
    window.localStorage.removeItem('name')
    this.setState({authToken: null})
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
          pendingSignup={this.state.pendingSignup}
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
        <div className='auth-btns'>
          <h1>BootBadger</h1>
          <button onClick={this.handleShowRegistration}>Register</button>
          <button onClick={this.handleShowLogin}>Login</button>
        </div>
      )
    }
  }

  renderApp () {
    return (
      <div>
        <div className='app-header auth-btns'>
          <div>Current User: {this.state.loginName}</div>
          <button onClick={this.handleShowAll}>All Boots</button>
          <button onClick={this.handleLogout}>Logout</button>
        </div>
        <BootBadger
          boots={this.state.boots}
          loginName={this.state.loginName}
          showBoot={this.state.showBoot}
          handleShowAll={this.handleShowAll}
          handleShowBoot={this.handleShowBoot}
          handleSloganSubmit={this.handleSloganSubmit}
          handleSloganUpVote={this.handleSloganUpVote}
          handleSloganDownVote={this.handleSloganDownVote}
        />
      </div>
    )
  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
        </header>
        {this.state.authToken === null ? this.renderAuth() : this.renderApp()}
      </div>
    )
  }
}

export default App
