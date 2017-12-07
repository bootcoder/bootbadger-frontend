import React, {Component} from 'react'
import Boot from './Boot.js'

class BootBadger extends Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div className='BootBadger'>
        {this.props.boots.map((boot,index) => {
          return <Boot />
        })}
      </div>
    )
  }
}

export default BootBadger
