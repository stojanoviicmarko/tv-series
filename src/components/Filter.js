import React, { Component } from 'react'
import Shows from './Shows'
import '../styles/filters.css'

export default class Filter extends Component {
  render() {
    return (
      <div className="filters">
        <select name="genre">
          <option>Yo</option>
          <option>Bros</option>
        </select>
        <select name="rating">
          <option>Yo</option>
          <option>Bros</option>
        </select>
        <select name="year">
          <option>Yo</option>
          <option>Bros</option>
        </select>
        <select name="sort">
          <option>Yo</option>
          <option>Bros</option>
        </select>
      </div>
    )
  }
}
