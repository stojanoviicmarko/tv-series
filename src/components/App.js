import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import { fetchData } from '../api/api';
import Show from './Show'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNames: [],
      showImg: []
    };
  }
  componentDidMount() {
    fetchData().then(res => {
      console.log(res);
      for (let i = 0; i < res.length; i++) {
        this.setState({
          showNames: [ ...this.state.showNames, res[i].name ],
          showImg: [ ...this.state.showImg, res[i].image.original ]
        });
      }
    });
  }
  render() {
    let showsArray = this.state.showImg.map(showImg => {
      return <Show image={showImg} /> 
    })
    return (
      <div>
        <Header />
          <div className='shows'>
            {showsArray}
          </div>
      </div>
    );
  }
}

export default App;
