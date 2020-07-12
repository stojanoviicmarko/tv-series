import React, { Component } from 'react'
import { fetchData } from '../api/api'
import '../styles/show.css'
import Filter from './Filter'

export default class Shows extends Component {
  constructor(props) {
    super(props)
    this.state = {
      arrayOfShows: [],
      genre: 'All',
      rating: 'All',
      language: 'All'
    }
  }
  componentDidMount() {
    fetchData().then((res) => {
      console.log(res)
      for (let i = 0; i < 10; i++) {
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

  handleApply = () => {
    const shows = [...this.state.arrayOfShows]
    const modified = shows.filter((s) => s.genres[0] === this.state.ganre)
    this.setState({
      arrayOfShows: [...modified]
    })
    console.log(modified)
  }

  handleChange = (event) => {
    const ganreValue = event.target.value
    const ratingValue = event.target.value
    const langValue = event.target.value
    this.setState({
      [event.target.name]: ganreValue,
      [event.target.name]: ratingValue,
      [event.target.name]: langValue
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="main">
          <Filter
            handleChange={this.handleChange}
            handleApply={this.handleApply}
          />
          <div className="shows">{this.renderShows()}</div>
        </div>
      </React.Fragment>
    )
  }
}
