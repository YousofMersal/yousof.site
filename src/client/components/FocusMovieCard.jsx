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
        <p>
          <strong> {this.props.tagline} </strong>
        </p>
        <img src={this.checkIfImage(this.props.img)} alt='None available' />
        <p>Runtime: {this.props.runtime}</p>
        <p>Released: {this.props.release} </p>
      </div>
    )
  }
}
