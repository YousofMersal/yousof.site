import React, { Component } from 'react'
import { getSingleMovie } from '../components/MovieFetch'

export default class Movie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movieInfo: '',
      loading: false
    }
  }
  componentDidMount() {
    getSingleMovie(this.props.match.params.id).then(response =>
      this.setState({
        movieInfo: response,
        loading: false
      }).catch(error => console.error(error))
    )
  }
  render() {
    return (
      <div>
        <h1>test</h1>
      </div>
    )
  }
}
