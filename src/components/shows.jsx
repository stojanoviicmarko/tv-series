import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate'
import { fetchData, searchShow } from '../api/api'
import Filter from './filter'
import '../assets/pagination.css'
import '../assets/shows.css'

export default class Shows extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      searchData: [],
      genre: 'All',
      rating: 'All',
      language: 'All',
      offset: 0,
      perPage: 20,
      currentPage: 0
    }
  }
  getData() {
    fetchData().then((data) => {
      this.setState({ data: data })
    })
  }
  receiveData() {
    const { data, offset, perPage } = this.state
    const slice = data.slice(offset, offset + perPage)
    const renderData = slice.map((d) => {
      return (
        <div key={d.id} className="card text-light m-2">
          <Link to={`/show/${d.id}/${d.name.toLowerCase()}`}>
            <div className="card-header">{d.name}</div>
            <img
              className="card-img-top"
              src={d.image.medium}
              alt="show-poster"
            />
          </Link>
        </div>
      )
    })
    this.setState({
      pageCount: Math.ceil(data.length / perPage),
      renderData
    })
  }

  componentDidMount() {
    this.getData()
    setInterval(() => {
      this.receiveData()
    }, 1000)
  }

  handlePageClick = (e) => {
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
    const { data, genre } = this.state
    const shows = [...data]
    const modified = shows.filter((s) => {
      if (genre !== 'All') {
        return s.genres[0] === genre
      } else {
        this.getData()
        return data
      }
    })
    this.setState({
      data: [...modified]
    })
  }

  handleChange = (event) => {
    const genreValue = event.target.value
    const ratingValue = event.target.value
    const langValue = event.target.value
    this.setState({
      [event.target.name]: genreValue,
      [event.target.name]: ratingValue,
      [event.target.name]: langValue
    })
  }

  handleSearch = (event) => {
    searchShow(event.target.value).then(data => {
      const searchData = data
      const renderSearchData = searchData.map(d => {
      let showImage = d.show.image ? d.show.image.medium : 'https://tse4.mm.bing.net/th?id=OIP.2EVNHHX4D-jWbnofJsaQHAHaFj&pid=Api'
        return (
          <div key={d.show.id} className="card text-light m-2">
            <Link to={`/show/${d.show.id}/${d.show.name.toLowerCase()}`}>
              <div className="card-header">{d.show.name}</div>
              <img
                src={showImage}
                className="card-img-top"
                alt="show-poster"
              />
            </Link>
          </div>
        )
      })
      this.setState({
        searchData: data,
        data: [],
        renderSearchData
      })
    })
  }

  render() {
    return (
      <div className="container">
        <div className="main">
          <Filter
            handleChange={this.handleChange}
            handleApply={this.handleApply}
          />
          <input
            onChange={this.handleSearch}
            className="form-control m-2 w-25"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <div className="shows">{this.state.renderData}</div>
          <div className="shows">{this.state.renderSearchData}</div>
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
      </div>
    )
  }
}