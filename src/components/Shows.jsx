import React, { Component } from 'react'
import ReactPaginate from 'react-paginate'
import { fetchData } from '../api/api'
import '../styles/show.css'
import Filter from './Filter'

export default class Shows extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      genre: 'All',
      rating: 'All',
      language: 'All',
      offset: 0,
      perPage: 20,
      currentPage: 0
    }
  }
  getData() {
    fetchData().then(data => {
      this.setState({ data: data })
    })
  }
  receiveData() {
    const { data, offset, perPage } = this.state
    const slice = data.slice(offset, offset + perPage)
    const renderData = slice.map(d => {
      return (
        <div key={d.id} className="show-wrap">
          <img className="show-img" src={d.image.medium} alt="show-poster" />
        </div>
      )
    })
    this.setState({
      pageCount: Math.ceil(data.length / this.state.perPage),
      renderData
    })
  }

  componentDidMount() {
    this.getData()
    setInterval(() => {this.receiveData()}, 1000)
  }

  handlePageClick = e => {
    const selectedPage = e.selected
    const offset = selectedPage * this.state.perPage

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset
      },
      () => {
        this.receiveData()
      }
    )
  }

  handleApply = () => {
    const shows = [ ...this.state.data ]
    const modified = shows.filter(s => s.genres[0] === this.state.ganre)
    this.setState({
      data: [ ...modified ]
    })
  }

  handleChange = event => {
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
          <Filter handleChange={this.handleChange} handleApply={this.handleApply} />
          <div className="shows">{this.state.renderData}</div>
          <ReactPaginate
            previousLabel={'prev'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
          />
        </div>
      </React.Fragment>
    )
  }
}
