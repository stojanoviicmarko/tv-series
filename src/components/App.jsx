import React, { Component } from 'react'
import Header from './header'
import Shows from './shows'

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
