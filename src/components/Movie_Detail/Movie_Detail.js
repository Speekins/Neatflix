import React from "react"
import './Movie_Detail.css'

const MovieDetail = ({ movie, videos, clearMovie }) => {
console.log('movie: ', movie);
  const background = { backgroundImage: `url(${movie.backdrop_path})` }

  const trailer = (videos) => {
    if (videos[0].site === 'YouTube') {
      return `https://www.youtube.com/watch?v=${videos[0].key}`
    } else if (videos[0].site === 'Vimeo') {
      return `https://www.vimeo.com/${videos[0].key}`
    }
  }

  return (
    <div className="movie-detail" style={background}>
      <img src={movie.poster_path} alt={`poster for ${movie.title}`} className='poster-detail'></img>
      <div className="details">
        <h1>{movie.title}</h1>
        {!!movie.tagline && <p>{movie.tagline}</p>}
        <p>Rating: {movie.average_rating.toFixed(1)}</p>
        <p>Release Date: {movie.release_date}</p>
        {!!movie.budget && <p>Budget: {movie.budget}</p>}
        {!!movie.revenue && <p>Revenue: {movie.revenue}</p>}
        {!!movie.runtime && <p>Runtime: {movie.runtime} minutes</p>}
        <p>Overview: {movie.overview}</p>
        {!!videos.length && 
        <p>Watch the <a href={trailer(videos)} target="_blank" rel="noreferrer">trailer</a>!</p>
        }
        <button onClick={() => clearMovie()}>Return</button>
      </div>
    </div>
  )
}

export default MovieDetail