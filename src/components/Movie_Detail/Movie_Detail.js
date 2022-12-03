import React from "react";
import MoviesContainer from "../Movies_Container/Movies_Container";

const MovieDetail = ({movie, exitMovie}) => {
  return (
    <>
      <p>{movie.id}</p>
      <button onClick={() => exitMovie()}></button>
    </>
  )
}

export default MovieDetail