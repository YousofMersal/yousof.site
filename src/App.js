import React, { Component } from 'react'
import MovieCardList from './components/MovieCardList.jsx'
import SearchBar from './components/SearchBar.jsx'
import movieFetch from './components/MovieFetch'
import './style.css'

class App extends Component {
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
        movieFetch(searchTerm)
            .then(response => this.setState({ movies: response, loading: false }))
            .then(response => console.log(response))
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
                <h1>Placeholder title</h1>
                <SearchBar
                    type="text"
                    className="inpField"
                    placeholder="GitHub User"
                    passedFunction={this.handleInpChange}
                    value={this.state.searchTerm}
                    keypress={this.onKeyPress}
                />
                <MovieCardList data={this.state.movies} />
            </div>
        )
    }
}

export default App
