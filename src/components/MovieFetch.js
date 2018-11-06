const apikey = 'fa848bcf'

export default async function getMovie(search) {
    const response = await fetch(
        `http://private.omdbapi.com/?s=${search}&apikey=${apikey}`
    )
    const body = await response.json()
    return body.Search
}
