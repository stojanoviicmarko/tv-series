import axios from 'axios'

const url = 'http://cors-anywhere.herokuapp.com/http://api.tvmaze.com/shows'

export const fetchData = async (showNumber) => {
  try {
    const apiPromise = await axios.get(url)
    const jsonData = apiPromise.data

    return jsonData
  } catch (error) {
    console.log(error)
  }
}
