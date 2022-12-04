import React, { Component } from "react";
import App from "../App/App";
import Poster from "../Poster/Poster";
import MovieDetail from "../Movie_Detail/Movie_Detail";
import './Movies_Container.css'


class MoviesContainer extends Component {
  constructor() {
    super();
    this.state = {
      selectedMovie: ''
    }
  }

  showMovie = (event) => {
    let id = event.target.parentNode.id
    let movie = this.props.movies.find(movie => movie.id = id)
    this.setState({selectedMovie: movie})
  }

  exitMovie = () => {
    this.setState({ selectedMovie: '' })
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