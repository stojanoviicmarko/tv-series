import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2 bg-dark"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success my-2 my-sm-0">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
    // <div className="header">
    //   <div className="navbar">
    //     <ul>
    //       <Link className="home" to="/">
    //         Home
    //       </Link>
    //       <div className="search-box">
    //         <input
    //           className="search-input"
    //           type="text"
    //           placeholder="Search for shows"
    //         />
    //         <button className="search-button">Search</button>
    //       </div>
    //       <button className="sign-in-button">
    //         <Link to="/login">Login</Link>
    //       </button>
    //     </ul>
    //   </div>
    // </div>
  )
}

export default Header
