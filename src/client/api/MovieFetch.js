import Axios from 'axios'

const errFunc = error => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.error(error.response.data)
    console.error(error.response.status)
    console.error(error.response.headers)
  } else if (error.request) {
    // The request was made but no response was received
    throw new Error('Whoops something went wring while POSTing!: ' + error.request)
  } else {
    // Something happened in setting up the request that triggered an err
    throw new Error('Whoops something went wring while POSTing!: ' + error.response)
  }
  console.error(error.config)
}

async function getMovies(search) {
  try {
    const response = await Axios.post('/api/getmultiple', { data: search })

    return await response.data.results
  } catch (err) {
    errFunc(err)
  }
}

async function getSingleMovie(id) {
  try {
    const res = await Axios.post('/api/getsingle', { data: id })

    return res.data
  } catch (err) {
    errFunc(err)
  }
}

export { getMovies, getSingleMovie }
