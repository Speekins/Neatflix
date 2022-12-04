import React from "react"
import './Movie_Detail.css'

const MovieDetail = ({ movie, exitMovie }) => {

  const background = { backgroundImage: `url(${movie.backdrop_path})` }

  return (
    <div className="movie-detail" style={background}>
      <img src={movie.poster_path} alt={`poster for ${movie.title}`} className='poster'></img>
      <div className="details">
        <p>Title: {movie.title}</p>
        <p>Rating: {movie.average_rating}</p>
        <button onClick={() => exitMovie()}>Return</button>
      </div>
    </div>
  )
}

export default MovieDetail