import React, { Component } from 'react'
import ReactPaginate from 'react-paginate'
import { Link } from 'react-router-dom'
import { fetchData, searchShow } from '../api/api'
import '../assets/pagination.css'

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
    fetchData().then(data => {
      this.setState({ data: data })
    })
  }
  receiveData() {
    const { data, offset, perPage } = this.state
    const slice = data.slice(offset, offset + perPage)
    const renderData = slice.map(d => {
      const rawSummary = d.summary
      const summary = rawSummary
        .slice(0, 90)
        .replace('<p>', '')
        .replace('</p>', '')
        .replace('<b>', '')
        .replace('</b>', '')
        .concat('...')
      return (
        <div
          key={d.id}
          className="flex-grow max-w-xs bg-gray-800 rounded hover:bg-gray-400 hover:text-gray-900 transition-colors duration-200 active:bg-gray-200 overflow-hidden shadow-lg m-4 border border-gray-600 w-48 text-gray-300"
        >
          <Link to={`/show/${d.id}/${d.name.toLowerCase()}`}>
            <img className="w-full" src={d.image.medium} alt="show-poster" />
            <div className="px-4 py-2">
              <div className="flex justify-between">
                <div className="font-bold text-x mb-2">{d.name}</div>
                <p className="text-orange-700 text-xs mt-1 ml-2">{d.rating.average}</p>
              </div>
              <p className="text-gray-600 text-xs">{summary}</p>
            </div>
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
  handleSearch = event => {
    searchShow(event.target.value).then(data => {
      const searchData = data
      const renderSearchData = searchData.map(d => {
        let showImage = d.show.image
          ? d.show.image.medium
          : 'https://tse4.mm.bing.net/th?id=OIP.2EVNHHX4D-jWbnofJsaQHAHaFj&pid=Api'
        const rawSummary = d.show.summary ? d.show.summary : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        const summary = rawSummary.slice(0, 90).replace('<p>', '').replace('<b>', '').replace('</b>', '').concat('...')
        console.log(d)
        return (
          <div
            key={d.show.id}
            className="max-w-sm rounded bg-gray-800 hover:bg-gray-400 hover:text-gray-900 transition-colors duration-200 active:bg-gray-200 overflow-hidden shadow-lg m-4 border border-gray-600 w-48 text-gray-300"
          >
            <Link to={`/show/${d.show.id}/${d.show.name.toLowerCase()}`}>
              <img className="w-full" src={showImage} alt="show-poster" />
              <div className="px-4 py-2">
                <div className="flex justify-between">
                  <div className="font-bold text-x mb-2">{d.show.name}</div>
                  <p className="text-orange-700 text-xs mt-1 ml-2">{d.show.rating.average}</p>
                </div>
                <p className="text-gray-600 text-xs">{summary}</p>
              </div>
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
      <div className="">
        <div className="flex flex-col justify-center items-center">
          {/* <Filter handleChange={this.handleChange} handleApply={this.handleApply} /> */}
          <input
            onChange={this.handleSearch}
            className="appearance-none bg-gray-500 text-white placeholder-white rounded w-3/6 lg:w-1/4 h-12 p-2 mx-4 item-center mt-4 text-lg"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <div className="flex flex-col">
            <div className="flex justify-center h-auto flex-shrink md:flex-wrap w-full">{this.state.renderData}</div>
            <div className="flex justify-center h-auto flex-shrink flex-wrap w-full">{this.state.renderSearchData}</div>
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
      </div>
    )
  }
}
