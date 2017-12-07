import React, {Component} from 'react'
import Boot from './Boot.js'

class BootBadger extends Component {
  constructor () {
    super()

    this.renderBoot = this.renderBoot.bind(this)
    this.renderAll = this.renderAll.bind(this)
  }

  renderBoot () {
    const boot = this.props.boots.find((boot) => boot.name === this.props.showBoot)
    return <Boot boot={boot} />
  }

  renderAll () {
    return this.props.boots.map((boot, index) => {
      if (boot.name !== window.localStorage.getItem('name')) {
        return (
          <button
            key={index}
            onClick={() => this.props.handleShowBoot(boot.name)}
          >
            {boot.name}
          </button>
        )
      }
      return null
    })
  }
  render () {
    return (
      <div className='BootBadger'>
        {this.props.showBoot ? this.renderBoot() : this.renderAll()}
      </div>
    )
  }
}

export default BootBadger
