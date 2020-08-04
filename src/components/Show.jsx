import React, { Component } from 'react'
import { fetchShow } from '../api/api'

export default class Show extends Component {
  _isMounted = false

  state = {
    data: [],
    id: null
  }

  getData() {
    let id = this.props.match.params.show_id
    fetchShow(id).then((data) => {
      this._isMounted &&
        this.setState({
          data: data,
          id: id
        })
    })
  }

  componentDidMount() {
    this._isMounted = true
    this._isMounted && this.getData()
  }
  componentWillUnmount() {
    this._isMounted = false
  }
  render() {
    return (
      <div>
        <h1>{this.state.id}</h1>
      </div>
    )
  }
}
