import React, {Component} from 'react'
import Slogan from './Slogan'
import SloganForm from './SloganForm'

class Boot extends Component {
  render () {
    return (
      <div className='Boot'>
        <h1>{this.props.boot.name}</h1>
        <SloganForm
          boot={this.props.boot}
        />
        {this.props.boot.slogans.map((slogan, index) => {
          return (
            <Slogan
              key={index}
              boot={this.props.boot}
            />
          )
        })}
      </div>
    )
  }
}

export default Boot
