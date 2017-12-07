import React, {Component} from 'react'

class Slogan extends Component {
  render () {
    return (
      <div className='Slogan'>
        <div className='vote-container'>
          <img
            className='vote-img'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcXqTKV4bDdAzjE9c_vuyrGusoNhqhc6-meDXtR2CbuIL0gpNLbA'
            onClick={this.handleUpVote}
            alt='downVote'
          />
          <img
            className='vote-img'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxpuVIJxjVnAnLPQCWI9R74v_e8F2yleiLhLdewMZxTh3f-8aZ'
            onClick={this.handleDownVote}
            alt='downVote'
          />
        </div>
        <div className='slogan-text'>
          {this.props.slogan.body}
        </div>
      </div>
    )
  }
}

export default Slogan
