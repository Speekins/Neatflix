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

    const moviePosters = []

    return (
      <h1><Poster /></h1>
    )
  }
}

export default MoviesContainer;