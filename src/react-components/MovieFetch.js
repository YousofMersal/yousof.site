const apikey = 'fa848bcf'

async function getMovie(search) {
  const response = await fetch(
    `http://private.omdbapi.com/?s=${search}&apikey=${apikey}`
  )
  const body = await response.json()
  return body.Search
}

async function getSingleMovie(id) {
  const response = await fetch(
    `http://private.omdbapi.com/?i=${id}&apikey=${apikey}`
  )
  const body = await response.json()
  return body
}

export { getMovie, getSingleMovie }
