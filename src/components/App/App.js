import './App.css'
import fetchData from '../../apiCalls'
import React, { Component } from 'react'
import MoviesContainer from '../Movies_Container/Movies_Container'
import './App.css'
import img from '../../Neatflix_Logos/2.png'
import { Route, Switch } from 'react-router-dom'
import Poster from '../Poster/Poster'
import '../Movies_Container/Movies_Container.css'
import '../Poster/Poster.css'
import MovieDetail from '../Movie_Detail/Movie_Detail'
import '../Movie_Detail/Movie_Detail.css'


class App extends Component {
  constructor() {
    super();
    this.state = {
      allMovies: [],
      error: null
    }
  }

  componentDidMount() {
    fetchData('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then((data) => this.setState({ allMovies: data.movies }))
      .catch(error => this.setState({ error: error }))
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
                  <h1>There are no movies to show!</h1>
                )
              }
              return (
                <MoviesContainer
                  movies={this.state.allMovies}
                  selectMovie={this.selectMovie}
                />
              )
            }}
          />
          <Route
            path="/:id"
            render={({ match }) => {
              return (
                <MovieDetail
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
