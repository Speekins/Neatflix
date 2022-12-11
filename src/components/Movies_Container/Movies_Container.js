import React from "react";
import Poster from "../Poster/Poster";
import './Movies_Container.css'
import PropTypes from 'prop-types';


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

MoviesContainer.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired
}