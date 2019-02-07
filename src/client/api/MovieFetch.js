import Axios from 'axios'
const apikey = process.env.REACT_APP_APIKEY
const errFunc = error => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log(error.response.data)
    console.log(error.response.status)
    console.log(error.response.headers)
  } else if (error.request) {
    // The request was made but no response was received
    throw new Error('Whoops something went wring while POSTing!: ' + error.request)
  } else {
    // Something happened in setting up the request that triggered an err
    throw new Error('Whoops something went wring while POSTing!: ' + error.response)
  }
  console.log(error.config)
}

async function getMovies(search) {
  try {
    const res = await Axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&language=en-US&query=${search}`
    )
    return await res.data.results
  } catch (err) {
    errFunc(err)
  }
}

async function getSingleMovie(search) {
  const res = await Axios.get(
    `https://api.themoviedb.org/3/movie/${search}?api_key=${apikey}&language=en-US`
  )
  return res.data
}

// getSingleMovie('181808').then(res => console.log(res))

export { getMovies, getSingleMovie }
