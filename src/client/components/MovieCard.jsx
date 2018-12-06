import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class MovieCard extends Component {
  checkIfImage(img) {
    if (img === 'N/A') {
      return require('./assets/NoPoster.jpg')
    } else {
      return img
    }
  }
  render() {
    return (
      <div className="moviecard">
        <Link to={`/movie/${this.props.id}`}>
          <p>{this.props.name}</p>
          <img src={this.checkIfImage(this.props.img)} alt="None available" />
        </Link>
      </div>
    )
  }
}
