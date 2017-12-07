import React, {Component} from 'react'

class Boot extends Component {
  render () {
    return (
      <div className='Boot'>
        {this.props.boot.name}
      </div>
    )
  }
}

export default Boot
