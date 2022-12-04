import React from "react"
import './Movie_Detail.css'

const MovieDetail = ({ movie, videos, exitMovie }) => {

  const background = { backgroundImage: `url(${movie.backdrop_path})` }
  const trailer = `https://www.youtube.com/watch?v=${videos[0].key}`
  console.log(videos[0].key)
  return (
    <div className="movie-detail" style={background}>
      <img src={movie.poster_path} alt={`poster for ${movie.title}`} className='poster-detail'></img>
      <div className="details">
        <p>Title: {movie.title}</p>
        {!!movie.tagline && <p>{movie.tagline}</p>}
        <p>Rating: {movie.average_rating.toFixed(1)}</p>
        <p>Release Date: {movie.release_date}</p>
        {!!movie.budget && <p>Budget: {movie.budget}</p>}
        {!!movie.revenue && <p>Revenue: {movie.revenue}</p>}
        <p>Runtime: {movie.runtime} minutes</p>
        <p>Overview: {movie.overview}</p>
        <p>Watch the <a href={trailer} target="_blank" rel="noreferrer">trailer</a>!</p>
        <button onClick={() => exitMovie()}>Return</button>
      </div>
    </div>
  )
}

export default MovieDetail