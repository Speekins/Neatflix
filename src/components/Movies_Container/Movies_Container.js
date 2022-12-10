import React from "react";
import App from "../App/App";
import Poster from "../Poster/Poster";
import MovieDetail from "../Movie_Detail/Movie_Detail";
import './Movies_Container.css'
import fetchData from "../../apiCalls";


const MoviesContainer = ({movies}) => {
    const moviePosters = movies
      .map(movie => {
        return <Poster 
          title={movie.title}
          poster={movie.poster_path}
          id={movie.id}
          key={movie.id}
        />
      });

    return (
      <div className="movie-posters">{!moviePosters.length ? <p>There are no search results</p> : moviePosters}</div>
    )
  
}

export default MoviesContainer;