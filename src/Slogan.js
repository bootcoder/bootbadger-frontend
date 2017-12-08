import React, {Component} from 'react'

class Slogan extends Component {
  constructor () {
    super()

    this.handleUpVote = this.handleUpVote.bind(this)
    this.handleDownVote = this.handleDownVote.bind(this)
  }

  handleDownVote () {
    this.props.handleSloganDownVote(this.props.boot.id, this.props.slogan.id)
  }

  handleUpVote () {
    this.props.handleSloganUpVote(this.props.boot.id, this.props.slogan.id)
  }

  render () {
    return (
      <div className='Slogan'>
        <div>Votes: {this.props.slogan.total_votes}</div>
        <div className='vote-container'>
          <a
            onClick={this.handleUpVote}
            href='#'>
            <img
              className='vote-img'
              src='http://www.pngmart.com/files/3/Up-Arrow-PNG-HD-279x279.png'
              alt='upVote'
            /></a>
          <a
            onClick={this.handleDownVote}
            href='#'>
            <img
              className='vote-img'
              src='http://www.clker.com/cliparts/y/m/X/o/s/R/down-arrow-circle-hi.png'
              alt='downVote'
            /></a>
        </div>
        <div className='slogan-text'>
          {this.props.slogan.body}
        </div>
      </div>
    )
  }
}

export default Slogan
