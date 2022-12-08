import React, { Component } from "react";
import App from "../App/App";
import Poster from "../Poster/Poster";
import MovieDetail from "../Movie_Detail/Movie_Detail";
import './Movies_Container.css'
import fetchData from "../../apiCalls";



class MoviesContainer extends Component {
  constructor() {
    super();
    this.state = {
      selectedMovie: '',
      selectedMovieVideos: '',
      error: ''
    }
  }

  showMovie = (event) => {
    let id = +event.target.parentNode.id

    Promise.all([
      fetchData(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`),
      fetchData(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`)
    ])
      .then(data => {
        this.setState({ selectedMovie: data[0].movie, selectedMovieVideos: data[1].videos })
      })
      .catch(error => this.setState({ error: error }))
  }

  exitMovie = () => {
    this.setState({ selectedMovie: '', selectedMovieVideos: '' })
  }

  render() {
    const moviePosters = this.props.movies
      .map(movie => {
        return <Poster 
          title={movie.title}
          poster={movie.poster_path}
          id={movie.id}
          showMovie={this.showMovie}
          key={movie.id}
        />
      });

    return (
      <>
        {this.state.selectedMovie && <MovieDetail 
          movie={this.state.selectedMovie}
          videos={this.state.selectedMovieVideos}
          exitMovie={this.exitMovie}
          />
        }
        {(!this.state.selectedMovie && !this.state.error) && <div className="movie-posters">{moviePosters}</div>}
        {this.state.error && <h2>Something went wrong! {this.state.error.message}</h2>}
      </>
    )
  }
}

export default MoviesContainer;