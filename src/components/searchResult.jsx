import React, { Component } from 'react'

export default class searchResult extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        <h1>{this.props.inputValue} </h1>
      </div>
    )
  }
}
