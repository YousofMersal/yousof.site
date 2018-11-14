import React, { Component } from 'react'
import MovieCardList from '../react-components/MovieCardList.jsx'
import SearchBar from '../react-components/SearchBar.jsx'
import { getMovie } from '../react-components/MovieFetch'
import CssLoader from '../react-components/CssLoader.jsx'

export default class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
      movies: [],
      loading: false
    }
    this.handleInpChange = this.handleInpChange.bind(this)
    this.onSubmitClickHandler = this.onSubmitClickHandler.bind(this)
    this.onKeyPress = this.onKeyPress.bind(this)
  }

  handleInpChange(event) {
    this.setState({ searchTerm: event.target.value })
  }

  onSubmitClickHandler() {
    const searchTerm = this.state.searchTerm
    this.setState({
      searchTerm: '',
      loading: true
    })
    getMovie(searchTerm)
      .then(response => this.setState({ movies: response, loading: false }))
      .catch(error => console.log(error))
  }

  onKeyPress(event) {
    if (event.key === 'Enter') {
      this.onSubmitClickHandler()
    }
  }

  render() {
    return (
      <div>
        <h1 className="title">Koala Keeper</h1>
        <SearchBar
          type="text"
          className="inpField"
          placeholder="Movie Search"
          passedFunction={this.handleInpChange}
          value={this.state.searchTerm}
          keypress={this.onKeyPress}
        />
        {this.state.loading && <CssLoader />}
        <MovieCardList data={this.state.movies} />
      </div>
    )
  }
}