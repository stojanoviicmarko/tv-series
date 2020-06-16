import React, { Component } from 'react'
import '../styles/header.css'

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <div className='navbar'>
                    <ul>
                        <img className='logo' src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.oliviadabo.net%2Fwp-content%2Fuploads%2F2013%2F06%2Fimdb-logo.png&f=1&nofb=1' alt='logo' />
                        <div className='search-box'>
                            <input className='search-input' type='text' placeholder='Search for shows' />   
                            <button className='search-button'>Search</button>
                        </div>
                        <button className='sign-in-button'>Sign in</button>
                    </ul>
                </div>
                
            </div>
        )
    }
}
