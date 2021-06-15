import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Shows from './shows'
import Show from './show'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Shows} />
        <Route path="/show/:show_id" component={Show} />
      </BrowserRouter>
    )
  }
}

export default App
