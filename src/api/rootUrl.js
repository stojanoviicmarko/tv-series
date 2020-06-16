import { getDefaultNormalizer } from "@testing-library/react";

function getRootUrl() {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const apiUrl = `${proxy}http://api.tvmaze.com/shows`;

    fetch(getRootUrl())
        .then(res => res.json())
        .then(data => {
            getData(data);
        })
        .catch(e => console.log(e))
    }

export default function getData(data){
    let array = [];
    array = data;
    return array;
}