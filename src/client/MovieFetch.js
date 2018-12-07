import Axios from 'axios'

async function getMovies(search) {
  const response = await Axios.post('/api/getmultiple', { data: search }).catch(
    err => {
      if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(err.response.data)
        console.log(err.response.status)
        console.log(err.response.headers)
      } else if (err.request) {
        // The request was made but no response was received
        throw new Error('Whoops something went wring while POSTing!: ' + err.request)
      } else {
        // Something happened in setting up the request that triggered an err
        throw new Error(
          'Whoops something went wring while POSTing!: ' + err.response
        )
      }
      console.log(err.config)
    }
  )
  return await response.data.Search
  //   `http://private.omdbapi.com/?s=${search}&apikey=${apikey}`
}

async function getSingleMovie(id) {
  const response = await Axios.post('/api/getsingle', { data: id }).catch(err => {
    if (err.response) {
      console.log(err.response.data)
      console.log(err.response.status)
      console.log(err.response.headers)
    } else if (err.request) {
      throw new Error('Whoops something went wring while POSTing!: ' + err.request)
    } else {
      throw new Error('Whoops something went wring while POSTing!: ' + err.response)
    }
    console.log(err.config)
  })
  return await response.data
}

export { getMovies, getSingleMovie }
