import React, { Component } from 'react'
import { fetchData } from '../api/api'
import '../styles/show.css'

export default class Shows extends Component {
  constructor(props) {
    super(props)
    this.state = {
      arrayOfShows: [],
      filterValue: {
        ganre: this.props.ganre,
        rating: this.props.rating,
        language: this.props.language
      }
    }
  }
  componentDidMount() {
    fetchData().then((res) => {
      console.log(res)
      for (let i = 0; i < res.length; i++) {
        this.setState({
          arrayOfShows: [...this.state.arrayOfShows, res[i]]
        })
      }
    })
  }
  renderShows = () => {
    let renderArray = this.state.arrayOfShows.map((shows) => {
      return (
        <div key={shows.id} className="show-wrap">
          <img
            className="show-img"
            src={shows.image.medium}
            alt="show-poster"
          />
        </div>
      )
    })
    return renderArray
  }
  render() {
    return (
      <React.Fragment>
        <div className="main">
          <div className="shows">{this.renderShows()}</div>
        </div>
      </React.Fragment>
    )
  }
}
