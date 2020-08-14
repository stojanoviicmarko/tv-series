import axios from 'axios'

const url = 'https://api.tvmaze.com/shows'

export const fetchData = async () => {
  try {
    const apiPromise = await axios.get(url)
    const jsonData = apiPromise.data

    return jsonData
  } catch (error) {
    console.log(error)
  }
}

export const fetchShow = async (showId) => {
  try {
    const apiPromise = await axios.get(`${url}/${showId}`)
    const jsonData = apiPromise.data

    return jsonData
  } catch (error) {
    console.log(error)
  }
}

export const searchShow = async (query) => {
  try {
    const apiPromise = await axios.get(
      `https://api.tvmaze.com/search/shows?q=:${query}`
    )
    const jsonData = apiPromise.data

    return jsonData
  } catch (error) {
    console.log(error)
  }
}
