import React, { Component } from 'react'

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
        <li>
          <a href={`/movie/${this.props.id}`}>
            <p>{this.props.name}</p>
            <img src={this.checkIfImage(this.props.img)} alt="None available" />
          </a>
        </li>
      </div>
    )
  }
}
