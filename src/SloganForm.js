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
    this.props.submitNewSlogan(this.props.boot.name, this.state.sloganFormText)
  }

  render () {
    return (
      <form
        onSubmit={this.handleSubmit}
        className='SloganForm'
      >
        <textarea
          name='slogan'
          cols='30'
          rows='10'
          value={this.state.sloganFormText}
          onChange={this.handleChange}
        />
      </form>
    )
  }
}

export default SloganForm
