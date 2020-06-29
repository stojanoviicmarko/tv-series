import React, { Component } from 'react'
import '../styles/filters.css'

export default class Filter extends Component {
  render() {
    return (
      <div className="filters">
        <label>Ganre: </label>
        <select name="genre">
          <option value="all">All</option>
          <option value="action">Action</option>
          <option value="adult">Adult</option>
          <option value="adventure">Adventure</option>
          <option value="anime">Anime</option>
          <option value="children">Children</option>
          <option value="comedy">Comedy</option>
          <option value="crime">Crime</option>
          <option value="diy">DIY</option>
          <option value="drama">Drama</option>
          <option value="rspionage">Espionage</option>
          <option value="family">Family</option>
          <option value="fantasy">Fantasy</option>
          <option value="food">Food</option>
          <option value="history">History</option>
          <option value="horror">Horror</option>
          <option value="legal">Legal</option>
          <option value="medical">Medical</option>
          <option value="music">Music</option>
          <option value="mystery">Mystery</option>
          <option value="mature">Mature</option>
          <option value="romance">Romance</option>
          <option value="science-Fiction">Science-Fiction</option>
          <option value="sports">Sports</option>
          <option value="supernatural">Supernatural</option>
          <option value="thriller">Thriller</option>
          <option value="travel">Travel</option>
          <option value="war">War</option>
          <option value="western">Western</option>
        </select>
        <label>Rating: </label>
        <select name="rating">
          <option value="all">All</option>
          <option value="2+">2+</option>
          <option value="3+">3+</option>
          <option value="4+">4+</option>
          <option value="5+">5+</option>
          <option value="6+">6+</option>
          <option value="7+">7+</option>
          <option value="8+">8+</option>
          <option value="9+">9+</option>
        </select>
        <label>Language: </label>
        <select data-placeholder="Choose a Language...">
          <option value="all">All</option>
          <option value="AF">Afrikaans</option>
          <option value="SQ">Albanian</option>
          <option value="AR">Arabic</option>
          <option value="HY">Armenian</option>
          <option value="EU">Basque</option>
          <option value="BN">Bengali</option>
          <option value="BG">Bulgarian</option>
          <option value="CA">Catalan</option>
          <option value="KM">Cambodian</option>
          <option value="ZH">Chinese (Mandarin)</option>
          <option value="HR">Croatian</option>
          <option value="CS">Czech</option>
          <option value="DA">Danish</option>
          <option value="NL">Dutch</option>
          <option value="EN">English</option>
          <option value="ET">Estonian</option>
          <option value="FJ">Fiji</option>
          <option value="FI">Finnish</option>
          <option value="FR">French</option>
          <option value="KA">Georgian</option>
          <option value="DE">German</option>
          <option value="EL">Greek</option>
          <option value="GU">Gujarati</option>
          <option value="HE">Hebrew</option>
          <option value="HI">Hindi</option>
          <option value="HU">Hungarian</option>
          <option value="IS">Icelandic</option>
          <option value="ID">Indonesian</option>
          <option value="GA">Irish</option>
          <option value="IT">Italian</option>
          <option value="JA">Japanese</option>
          <option value="JW">Javanese</option>
          <option value="KO">Korean</option>
          <option value="LA">Latin</option>
          <option value="LV">Latvian</option>
          <option value="LT">Lithuanian</option>
          <option value="MK">Macedonian</option>
          <option value="MS">Malay</option>
          <option value="ML">Malayalam</option>
          <option value="MT">Maltese</option>
          <option value="MI">Maori</option>
          <option value="MR">Marathi</option>
          <option value="MN">Mongolian</option>
          <option value="NE">Nepali</option>
          <option value="NO">Norwegian</option>
          <option value="FA">Persian</option>
          <option value="PL">Polish</option>
          <option value="PT">Portuguese</option>
          <option value="PA">Punjabi</option>
          <option value="QU">Quechua</option>
          <option value="RO">Romanian</option>
          <option value="RU">Russian</option>
          <option value="SM">Samoan</option>
          <option value="SR">Serbian</option>
          <option value="SK">Slovak</option>
          <option value="SL">Slovenian</option>
          <option value="ES">Spanish</option>
          <option value="SW">Swahili</option>
          <option value="SV">Swedish </option>
          <option value="TA">Tamil</option>
          <option value="TT">Tatar</option>
          <option value="TE">Telugu</option>
          <option value="TH">Thai</option>
          <option value="BO">Tibetan</option>
          <option value="TO">Tonga</option>
          <option value="TR">Turkish</option>
          <option value="UK">Ukrainian</option>
          <option value="UR">Urdu</option>
          <option value="UZ">Uzbek</option>
          <option value="VI">Vietnamese</option>
          <option value="CY">Welsh</option>
          <option value="XH">Xhosa</option>
        </select>
      </div>
    )
  }
}
