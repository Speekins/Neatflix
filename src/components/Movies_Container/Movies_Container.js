import React, { Component } from "react";
import App from "../App/App";
import Poster from "../Poster/Poster";
import MovieDetail from "../Movie_Detail/Movie_Detail";


class MoviesContainer extends Component {
  constructor() {
    super();
    this.state = {
      selectedMovie: {
        "id": 694919,
        "poster_path": "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
        "title": "Money Plane",
        "average_rating": 6.666666666666667,
        "release_date": "2020-09-29"
      }
    }
  }

  showMovie = (event) => {
    this.setState({})
  }

  exitMovie = (event) => {
    this.setState({})
  }

  render() {
    const moviePosters = this.props.movies
      .map(movie => {
        return <Poster 
          title={movie.title}
          poster={movie.poster_path}
          id={movie.id}
          />
      });

    return (
      <>
        {this.state.selectedMovie && <MovieDetail movie={this.state.selectedMovie}/>}
        {!this.state.selectedMovie && <div>{moviePosters}</div>}
      </>
    )
  }
}

export default MoviesContainer;