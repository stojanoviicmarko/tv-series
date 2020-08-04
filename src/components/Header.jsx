import React from 'react'
import '../styles/header.css'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <React.Fragment>
      <div className="header">
        <div className="navbar">
          <ul>
            <Link className="home" to="/">
              Home
            </Link>
            <div className="search-box">
              <input
                className="search-input"
                type="text"
                placeholder="Search for shows"
              />
              <button className="search-button">Search</button>
            </div>
            <button className="sign-in-button">
              <Link to="/login">Login</Link>
            </button>
          </ul>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Header
