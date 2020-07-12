import React, { Component } from 'react'
import Header from './Header'
import Shows from './Shows'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Shows />
      </React.Fragment>
    )
  }
}

export default App
