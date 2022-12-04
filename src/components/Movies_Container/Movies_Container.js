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
      selectedMovieVideos: ''
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
          exitMovie={this.exitMovie}
          />
        }
        {!this.state.selectedMovie && <div className="movie-posters">{moviePosters}</div>}
      </>
    )
  }
}

export default MoviesContainer;