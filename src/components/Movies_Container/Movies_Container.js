import React from "react";
import App from "../App/App";
import Poster from "../Poster/Poster";
import MovieDetail from "../Movie_Detail/Movie_Detail";
import './Movies_Container.css'
import fetchData from "../../apiCalls";


const MoviesContainer = ({movies, selectMovie}) => {
    const moviePosters = movies
      .map(movie => {
        return <Poster 
          title={movie.title}
          poster={movie.poster_path}
          id={movie.id}
          //selectMovie={selectMovie}
          key={movie.id}
        />
      });

    return (
      <div className="movie-posters">{moviePosters}</div>
    )
  
}

export default MoviesContainer;