import React, {Component} from 'react'

class SloganForm extends Component {
  constructor () {
    super()

    this.state = {
      sloganFormText: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.setState({sloganFormText: event.target.value})
  }

  handleSubmit (event) {
    event.preventDefault()
    this.props.handleSloganSubmit(this.props.boot.id, this.state.sloganFormText)
    this.setState({sloganFormText: ''})
  }

  render () {
    return (
      <form
        onSubmit={this.handleSubmit}
        className='SloganForm'
      >
        <textarea
          name='slogan'
          rows='5'
          className='slogan-form-textarea'
          value={this.state.sloganFormText}
          onChange={this.handleChange}
        />
        <br />
        <input type='submit' value='Sloganize!' />
      </form>
    )
  }
}

export default SloganForm
