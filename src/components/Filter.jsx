import React from 'react'

const Filter = (props) => {
  const { handleChange, handleApply } = props
  return (
    <div className="container">
      <div class="form-group">
        <div className="row row-cols-5">
          <select
            className="custom-select m-2"
            id="genre"
            onChange={handleChange}
          >
            <option value="All">All</option>
            <option value="Action">Action</option>
            <option value="Adult">Adult</option>
            <option value="Adventure">Adventure</option>
            <option value="Anime">Anime</option>
            <option value="Children">Children</option>
            <option value="Comedy">Comedy</option>
            <option value="Crime">Crime</option>
            <option value="Diy">DIY</option>
            <option value="Drama">Drama</option>
            <option value="espionage">Espionage</option>
            <option value="Family">Family</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Food">Food</option>
            <option value="History">History</option>
            <option value="Horror">Horror</option>
            <option value="Legal">Legal</option>
            <option value="Medical">Medical</option>
            <option value="Music">Music</option>
            <option value="Mystery">Mystery</option>
            <option value="Mature">Mature</option>
            <option value="Romance">Romance</option>
            <option value="Science-Fiction">Science-Fiction</option>
            <option value="Sports">Sports</option>
            <option value="Supernatural">Supernatural</option>
            <option value="Thriller">Thriller</option>
            <option value="Travel">Travel</option>
            <option value="War">War</option>
            <option value="Western">Western</option>
          </select>
          <select
            className="custom-select m-2"
            name="rating"
            onChange={handleChange}
          >
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
          <select
            className="custom-select m-2"
            name="language"
            onChange={handleChange}
          >
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
          <button className="btn brn-sm btn-warning m-2" onClick={handleApply}>
            Apply
          </button>
        </div>
      </div>
    </div>
  )
}

export default Filter
