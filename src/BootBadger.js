import React, {Component} from 'react'
import Boot from './Boot.js'

class BootBadger extends Component {
  render () {
    return (
      <div className='BootBadger'>
        {this.props.boots.map((boot, index) => {
          return (
            <Boot
              key={index}
              boot={boot}
            />
          )
        })}
      </div>
    )
  }
}

export default BootBadger
