import React, { Component } from 'react'

export default class Data extends Component {
    constructor(props) {
        super(props)

        this.state = {
            proxy: 'https://cors-anywhere.herokuapp.com/',
            apiUrl:
                'https://cors-anywhere.herokuapp.com/http://api.tvmaze.com/shows',
            apiData: []
        }
    }
    async getData() {
        let dataArray = []
        fetch(this.state.apiUrl)
            .then((res) => res.json())
            .then((data) => {
                let tempArr = []
                for (let i in data) {
                    tempArr.push(i, data[i])
                }
                dataArray = tempArr
            })
        return await dataArray
    }
    render() {
        console.log(this.getData())
        return <div></div>
    }
}
