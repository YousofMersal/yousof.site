import React, { Component } from 'react'

export default class MovieCard extends Component {
    render() {
        return (
            <div>
                <li>
                    <h2>{this.props.name}</h2>
                    <img src={this.props.img} alt="Movie Poster" />
                </li>
            </div>
        )
    }
}
