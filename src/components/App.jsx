import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './header'
import Shows from './shows'
import Login from './login'
import Show from './show'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Shows} />
        <Route path="/login" component={Login} />
        <Route path="/show/:show_id" component={Show} />
      </BrowserRouter>
    )
  }
}

export default App
