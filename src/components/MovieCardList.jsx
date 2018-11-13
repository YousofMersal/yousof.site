import React, { Component } from 'react'
import MovieCard from './MovieCard'

export default class MovieCardList extends Component {
  render() {
    if (this.props.data === undefined || this.props.data.length < 1) {
      return <h1>You need to search for movies</h1>
    } else {
      return (
        <ul className="moviecardlist">
          {this.props.data.map(item => (
            <MovieCard img={item.Poster} name={item.Title} key={item.imdbID} />
          ))}
        </ul>
      )
    }
  }
}
