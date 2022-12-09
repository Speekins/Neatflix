import React, { Component } from "react"
import './Movie_Detail.css'
import { Link } from "react-router-dom"
import fetchData from "../../apiCalls";

class MovieDetail extends Component {
  constructor(){
    super();
    this.state = {
      selectedMovie: '',
      selectedMovieVideos: '',
      error: null
    }
  }

  componentDidMount() {
    console.log('TEstT');
    const id = +this.props.id
    
    Promise.all([
      fetchData(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`),
      fetchData(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`)
    ])
      .then(data => {
        console.log('data: ', data);
        this.setState({ selectedMovie: data[0].movie, selectedMovieVideos: data[1].videos })
      })
      .catch(error => this.setState({ error: error }))

  }

  
  render(){

    console.log('Movie Detail: ', this.state);

    const background = { backgroundImage: `url(${this.state.selectedMovie.backdrop_path})` }

    const trailer = () => {
      if (this.state.selectedMovieVideos[0].site === 'YouTube') {
        return `https://www.youtube.com/watch?v=${this.state.selectedMovieVideos[0].key}`
      } else if (this.state.selectedMovieVideos[0].site === 'Vimeo') {
        return `https://www.vimeo.com/${this.state.selectedMovieVideos[0].key}`
      }
    }


    return (
      <div className="movie-detail" style={background}>
        <img src={this.state.selectedMovie.poster_path} alt={`poster for ${this.state.selectedMovie.title}`} className='poster-detail'></img>
      <div className="details">
        <h1>{this.state.selectedMovie.title}</h1>
        {!!this.state.selectedMovie.tagline && <p>{this.state.selectedMovie.tagline}</p>}
        {/* <p>Rating: {this.state.selectedMovie.average_rating.toFixed(1)}</p> */}
        <p>Release Date: {this.state.selectedMovie.release_date}</p>
        {!!this.state.selectedMovie.budget && <p>Budget: {this.state.selectedMovie.budget}</p>}
        {!!this.state.selectedMovie.revenue && <p>Revenue: {this.state.selectedMovie.revenue}</p>}
        {!!this.state.selectedMovie.runtime && <p>Runtime: {this.state.selectedMovie.runtime} minutes</p>}
        <p>Overview: {this.state.selectedMovie.overview}</p>
        {!!this.state.selectedMovieVideos.length && 
        <p>Watch the <a href={trailer(this.state.selectedMovieVideos)} target="_blank" rel="noreferrer">trailer</a>!</p>
        }
        <Link to={"/"}>
          <button>Return</button>
        </Link>
      </div>
    </div>

    )
  }

}



//   return (
//   )
// }

export default MovieDetail