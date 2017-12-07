import React, {Component} from 'react'

class Boot extends Component {
  render () {
    return (
      <div className='Boot'>
        <button onClick={() => this.props.handleShowBoot(this.props.boot.name)}>{this.props.boot.name}</button>
      </div>
    )
  }
}

export default Boot
