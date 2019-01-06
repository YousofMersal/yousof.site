import React, { Component } from 'react'
import MovieCard from './MovieCard'

export default class MovieCardList extends Component {
  render() {
    if (this.props.data === undefined || this.props.data.length < 1) {
      return <h2 className='nomovies'> You need to search for a movie </h2>
    } else {
      return (
        <div className='moviecardlist'>
          {this.props.data.map(item => (
            <MovieCard
              img={`https://image.tmdb.org/t/p/w342//${item.poster_path}`}
              name={item.original_title}
              key={item.id}
              id={item.id}
            />
          ))}
        </div>
      )
    }
  }
}
