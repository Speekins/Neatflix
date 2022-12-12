import React, { Component } from "react"
import './Movie_Detail.css'
import { Link } from "react-router-dom"
import fetchData from "../../apiCalls"
import PropTypes from 'prop-types'

class MovieDetail extends Component {
  constructor() {
    super();
    this.state = {
      selectedMovie: '',
      selectedMovieVideos: '',
      error: ''
    }
  }

  componentDidMount() {
    const id = +this.props.id
    this.props.resetSearch()
    Promise.all([
      fetchData(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`),
      fetchData(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`)
    ])
      .then(data => {
        this.setState({ selectedMovie: data[0].movie, selectedMovieVideos: data[1].videos })
      })
      .catch(error => this.setState({ error: error }))
  }

  render() {
    const videos = this.state.selectedMovieVideos
    const movie = this.state.selectedMovie
    const background = { backgroundImage: `linear-gradient(to bottom, rgba(54, 54, 54, 0.5), rgba(24, 24, 24, 0.67)), url(${movie.backdrop_path})` }

    const trailer = () => {
      if (videos[0].site === 'YouTube') {
        return `https://www.youtube.com/watch?v=${videos[0].key}`
      } else if (videos[0].site === 'Vimeo') {
        return `https://www.vimeo.com/${videos[0].key}`
      }
    }

    return (
      <>
        {this.state.error && <h1 className="warning">Something went wrong...({this.state.error.message})</h1>}
        {!this.state.error &&
          <div className="movie-detail" style={background}>
            <img src={movie.poster_path} alt={`poster for ${movie.title}`} className='poster-detail'></img>
            <div className="details">
              {!!movie.title && <h1 className="movie-title">{movie.title}</h1>}
              {!!movie.tagline && <p className="tagline">{movie.tagline}</p>}
              {!!movie.average_rating && <p>Rating: {movie.average_rating}</p>}
              {!!movie.release_date && <p>Release Date: {movie.release_date}</p>}
              {!!movie.budget && <p>Budget: {movie.budget}</p>}
              {!!movie.revenue && <p>Revenue: {movie.revenue}</p>}
              {!!movie.runtime && <p>Runtime: {movie.runtime} minutes</p>}
              {!!movie.overview && <p className="overview">Overview: {movie.overview}</p>}
              {!!videos.length &&
                <p>Watch the <a href={trailer(videos)} target="_blank" rel="noreferrer">trailer</a>!</p>
              }
              <Link to={"/"}>
                <button>Return</button>
              </Link>
            </div>
          </div>
        }
      </>
    )
  }
}

MovieDetail.propTypes = {
  id: PropTypes.string.isRequired
}

export default MovieDetail