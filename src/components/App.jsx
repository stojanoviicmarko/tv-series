import React, { Component } from 'react'
import Header from './Header'
import Shows from './Shows'
import Filter from './Filter'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Filter />
        <Shows />
      </React.Fragment>
    )
  }
}

export default App
