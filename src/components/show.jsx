import React, { Component } from 'react'
import { fetchShow } from '../api/api'

export default class Show extends Component {
  _isMounted = false

  state = {
    name: null,
    img: '',
    summary: null,
    rating: '',
    id: null
  }

  getData() {
    let id = this.props.match.params.show_id
    fetchShow(id).then((data) => {
      console.log(data)
      this._isMounted &&
        this.setState({
          name: data.name,
          img: data.image.original,
          summary: data.summary,
          rating: data.rating.average,
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
      <div className="container d-flex flex-row">
        <img
          src={this.state.img}
          className="img-fluid rounded m-4"
          alt="show poster"
          style={{ height: 600 }}
        />
        <div className="m-2">
          <h1>{this.state.name}</h1>
          {this.state.summary}
          <p className="m-2">
            <b>Rating: {this.state.rating}</b>
          </p>
        </div>
      </div>
    )
  }
}
