import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import MoviesContainer from '../Movies_Container/Movies_Container'
import Search from '../Search/Search'
import MovieDetail from '../Movie_Detail/Movie_Detail'
import fetchData from '../../apiCalls'
import './App.css'
import '../Movies_Container/Movies_Container.css'
import '../Movie_Detail/Movie_Detail.css'
import '../Search/Search.css'
import '../Poster/Poster.css'
import img from '../../Neatflix_Logos/2.png'

class App extends Component {
  constructor() {
    super()
    this.state = {
      allMovies: [],
      searchResults: null,
      error: null
    }
  }

  componentDidMount() {
    fetchData('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then((data) => this.setState({ allMovies: data.movies }))
      .catch(error => this.setState({ error: error }))
  }

  updateSearchResult = (searchTerm) => {
    if (!searchTerm) {
      this.setState({ searchResults: null })
    } else {
      const searchedMovies = this.state.allMovies.filter(movie => movie.title.toLowerCase().includes(searchTerm.toLowerCase()))
      this.setState({ searchResults: searchedMovies })
    }
  }

  resetSearch = () => {
    this.setState(this.state.searchResults = null)
  }

  exactMatch(id) {
    let match = this.state.allMovies.find(movie => movie.id === Number(id))
    return match
  }

  render() {
    return (
      <main className='content'>
        <header>
          <img src={img} alt="neatflix logo" className='neatflix-logo'></img>
        </header>
        <Switch>
          <Route
            exact path="/"
            render={() => {
              if (this.state.error) {
                return (
                  <h1 className='warning'>There are no movies to show... {this.state.error.message}</h1>
                )
              }
              return (
                <>
                  <Search updateSearchResult={this.updateSearchResult} className="movie-search"/>
                  <MoviesContainer
                    movies={this.state.searchResults === null ? this.state.allMovies : this.state.searchResults}
                  />
                </>
              )
            }}
          />
          <Route
            exact path="/:id"
            render={({ match }) => {
              if (!this.exactMatch(match.params.id)) {
                return (
                  <h1 className='warning'>Sorry, that link does not work!</h1>
                )
              }
              return (
                <MovieDetail
                  resetSearch={this.resetSearch}
                  id={match.params.id}
                />
              )
            }}
          />
        </Switch>
      </main>
    )
  }
}

export default App
