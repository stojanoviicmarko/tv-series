import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import { fetchData } from '../api/api';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showNames: [ 'Under the Dome' ],
			showImg: []
		};
	}
	componentDidMount() {
		fetchData().then(res => {
			console.log(res);
			for (let i = 0; i < 10; i++) {
				this.setState({
					showNames: [ ...this.state.showNames, res[i].name ]
				});
			}
		});
	}
	render() {
		return (
			<div>
				<Header />
				<h1>Hello React</h1>
				<h2>{this.state.showNames}</h2>
				<img src={this.state.showImg} alt="showname" />
			</div>
		);
	}
}

export default App;
