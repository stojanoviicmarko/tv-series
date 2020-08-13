import React, { useState } from 'react'
import Navbar from './navbar'
import SearchResult from './searchResult'

const Header = props => {
  const [value, setvalue] = useState('')

  const handleInput = event => {
    setvalue(event.target.value)
  }

  return (
    <React.Fragment>
      <Navbar handleInput={handleInput} />
      <SearchResult inputValue={value} />
    </React.Fragment>
  )
}

export default Header