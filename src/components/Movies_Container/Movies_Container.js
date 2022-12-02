import React, { Component } from "react";
import App from "../App/App";
import Poster from "../Poster/Poster";


class MoviesContainer extends Component {
  constructor() {
    super();
    this.state = {
      selectedMovie: ''
    }
  }

  

  render() {

    const moviePosters = this.props.movies
      .map(movie => {
        return <Poster title={movie.title}/>
      });


    return (
      <h1>{moviePosters}</h1>
    )
  }
}

export default MoviesContainer;