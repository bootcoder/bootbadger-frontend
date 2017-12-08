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
    return (<Boot
      handleSloganSubmit={this.props.handleSloganSubmit}
      handleSloganUpVote={this.props.handleSloganUpVote}
      handleSloganDownVote={this.props.handleSloganDownVote}
      boot={boot} />
    )
  }

  renderAll () {
    return this.props.boots.map((boot, index) => {
      if (boot.name !== this.props.loginName) {
        return (
          <div className='boot-container col'>
            <a
              key={index}
              className='boot-btn row'
              onClick={() => this.props.handleShowBoot(boot.name)}
            >
              <h4 className='boot-name'>{boot.name}</h4>
              <img
                src={boot.img_url}
                alt={boot.name}
                className='boot-img'
              />
            </a>
          </div>
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
