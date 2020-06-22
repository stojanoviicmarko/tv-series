import React, { Component } from 'react'
import '../styles/show.css'

export default class Show extends Component {
  render() {
    return (
      <div className='show-wrap'>
        <img className='show-img' src={this.props.image} alt='showimage' />
        <p className='show-text'>
          {this.props.showName}
        </p>
      </div>
    )
  }
}
