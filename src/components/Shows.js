import React, { Component } from 'react'
import { fetchData } from '../api/api'
import Filter from './Filter'
import '../styles/show.css'

export default class Shows extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showNames: [],
      showImg: []
    }
  }
  componentDidMount() {
    fetchData().then((res) => {
      console.log(res)
      for (let i = 0; i < res.length; i++) {
        this.setState({
          showNames: [...this.state.showNames, res[i].name],
          showImg: [...this.state.showImg, res[i].image.original]
        })
      }
    })
  }
  render() {
    let showsArray = this.state.showImg.map((showImg) => {
      return (
        <div className="show-wrap">
          <img className="show-img" src={showImg} alt="show-poster" />
        </div>
      )
    })
    return (
      <>
        <div className="main">
          <Filter />
          <div className="shows">{showsArray}</div>
        </div>
      </>
    )
  }
}
