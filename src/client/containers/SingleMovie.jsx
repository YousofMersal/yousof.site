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
        img={this.state.movieInfo.Poster}
        metascore={this.state.movieInfo.Metascore}
        name={this.state.movieInfo.Title}
        runtime={this.state.movieInfo.Runtime}
        release={this.state.movieInfo.Released}
        rating={this.state.movieInfo.Rated}
        director={this.state.movieInfo.Director}
        production={this.state.movieInfo.Production}
      />
    )
  }
}
