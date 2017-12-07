import React, {Component} from 'react'
import Boot from './Boot.js'

class BootBadger extends Component {
  constructor () {
    super()

    this.renderBoot = this.renderBoot.bind(this)
    this.renderAll = this.renderAll.bind(this)
  }

  renderBoot () {
    const boot = this.props.boots.find((boot) => boot.name === this.props.loginName)
    return <Boot boot={boot} handleShowBoot={this.props.handleShowBoot} />
  }

  renderAll () {
    return this.props.boots.map((boot, index) => {
      return (
        <Boot
          key={index}
          boot={boot}
          handleShowBoot={this.props.handleShowBoot}
        />
      )
    })
  }
  render () {
    return (
      <div className='BootBadger'>
        <button onClick={this.props.handleShowAll}>Show All Boots</button>
        {this.props.showBoot ? this.renderBoot() : this.renderAll()}
      </div>
    )
  }
}

export default BootBadger
