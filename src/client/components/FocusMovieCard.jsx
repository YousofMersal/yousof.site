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
      <div className='focusmoviecard'>
        <h2>
          <strong>{this.props.name}</strong>
        </h2>
        <img src={this.checkIfImage(this.props.img)} alt='None available' />
        <p>Runtime: {this.props.runtime}</p>
        <p>
          Metascore: <strong> {this.props.metascore} </strong>
        </p>
        <p>Released: {this.props.release} </p>
        <p>Age rating:  {this.props.rating}</p>
        <p>Director:  {this.props.director}</p>
        <p>Production:  {this.props.production}</p>
      </div>
    )
  }
}
