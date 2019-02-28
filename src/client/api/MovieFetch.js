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
  const response = await Axios.post('/api/getmultiple', { data: search }).catch(
    err => errFunc(err)
  )
  return await response.data.results
}

async function getSingleMovie(id) {
  const res = await Axios.post('/api/getsingle', { data: id }).catch(err =>
    errFunc(err)
  )
  return res.data
}

// getSingleMovie('181808').then(res => console.log(res))

export { getMovies, getSingleMovie }
