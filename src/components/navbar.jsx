import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <nav className="flex items-center lg:justify-start justify-center bg-gray-900 text-white h-16 lg:px-48 mb-8 shadow-lg">
      <div className="">
        <ul className="flex">
          <li className='mr-24'>
            <button className="border hover:bg-gray-700 active:bg-gray-900 transition-all duration-200 py-2 px-4 rounded">
              <Link className="" to="/">
                Home
              </Link>
            </button>
          </li>
          <li className='mr-24'>
            <button className='hover:bg-gray-700 active:bg-gray-900 py-2 px-4 rounded transition-all duration-200'>
              <Link className="" to="/">
                Login
              </Link>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
