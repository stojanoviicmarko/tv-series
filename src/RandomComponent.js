import React, { Component } from 'react'

export default class RandomComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            number1: 2,
            number2: 2,
            result: null,
        }
        this.calc = this.calc.bind(this)
    }
    calc() {
        this.setState({
            result: this.state.number1 + this.state.number2
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.number1} + {this.state.number2} = {this.state.result}</h1>
                <button onClick={this.calc}>Show</button>
            </div>
        )
    }
}