import React, { Component } from 'react'

export default class MovieCard extends Component {
    checkIfImage(img) {
        if (img === 'N/A') {
            return require('./assets/NoPoster.jpg')
            // return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa9Ay_5cDRi_Xm1HEdtTVH1m3JUixM6lW3c_f0-3cWGss7Ua8s'
        } else {
            return img
        }
    }
    render() {
        return (
            <div className="moviecard">
                <li>
                    <h2>{this.props.name}</h2>
                    <img
                        src={this.checkIfImage(this.props.img)}
                        alt="None available"
                    />
                </li>
            </div>
        )
    }
}
