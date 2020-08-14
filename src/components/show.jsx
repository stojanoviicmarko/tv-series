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
          summary: data.summary.replace('<p>', '').replace('</p>', '').replace('<b>', '').replace('</b>', ''),
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
      <div className="flex flex-row flex-wrap lg:flex-no-wrap m-8 xl:mx-48">
        <img
          src={this.state.img}
          className="rounded shadow-lg mx-12 lg:mx-0"
          alt="show poster"
        />
        <div className='m-8'>
          <h1 className='font-bold text-xl text-white mb-4'>{this.state.name}</h1>
          <p className='text-white mb-4'>{this.state.summary}</p>
          <p className="text-orange-500">
            <b>Rating: {this.state.rating}</b>
          </p>
        </div>
      </div>
    )
  }
}
