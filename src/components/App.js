import React, {Component} from 'react';
import '../App.css';
import '../api/rootUrl'
import getRootUrl from '../api/rootUrl';
import Header from './Header';

class App extends Component{
    render() {
        console.log(getRootUrl());
        return (
            <Header />
        )
    }
}

export default App;