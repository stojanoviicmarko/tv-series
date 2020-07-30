import React from 'react'
import '../styles/header.css'

const Header = (props) => {
  return (
    <React.Fragment>
      <div className="header">
        <div className="navbar">
          <ul>
            <img
              className="logo"
              src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.oliviadabo.net%2Fwp-content%2Fuploads%2F2013%2F06%2Fimdb-logo.png&f=1&nofb=1"
              alt="logo"
            />
            <div className="search-box">
              <input
                className="search-input"
                type="text"
                placeholder="Search for shows"
              />
              <button className="search-button">Search</button>
            </div>
            <button className="sign-in-button"></button>
          </ul>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Header
