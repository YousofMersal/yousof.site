import React, { Component } from 'react'
import { getSingleMovie } from '../api/MovieFetch'
import FocusMovieCard from '../components/FocusMovieCard'

export default class Movie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movieInfo: ''
    }
  }
  componentDidMount() {
    getSingleMovie(this.props.match.params.id)
      .then(response => this.setState({ movieInfo: response }))
      .catch(error => console.error(error))
  }
  render() {
    return (
      <FocusMovieCard
        img={`https://image.tmdb.org/t/p/w342//${this.state.movieInfo.poster_path}`}
        tagline={this.state.movieInfo.tagline}
        name={this.state.movieInfo.title}
        runtime={this.state.movieInfo.runtime}
        release={this.state.movieInfo.release_date}
      />
    )
  }
}
