import './App.css';
//import movieData from '../../movieData';
import fetchData from '../../apiCalls';
import React, { Component } from 'react';
import MoviesContainer from '../Movies_Container/Movies_Container';
import './App.css'
import img from '../../Neatflix_Logos/2.png'
import { Route, Switch} from 'react-router-dom'
import Poster from '../Poster/Poster';
import '../Movies_Container/Movies_Container.css'
import '../Poster/Poster.css'
import MovieDetail from '../Movie_Detail/Movie_Detail';


class App extends Component {
  constructor(){
    super();
    this.state = {
      allMovies: [],
      selectedMovie: null,
      selectedMovieVideos: null,
      error: null
    }
  }

  componentDidMount() {
    fetchData('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then((data) => this.setState({ allMovies: data.movies }))
    .catch(error => this.setState({ error: error}))
  }

  selectMovie = (event) => {
    let id = +event.target.parentNode.id

    Promise.all([
      fetchData(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`),
      fetchData(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`)
    ])
      .then(data => {
        console.log('PING');
        this.setState({ selectedMovie: data[0].movie, selectedMovieVideos: data[1].videos })
      })
      .catch(error => this.setState({ error: error }))
  }

  clearMovie = () => {
    this.setState({ selectedMovie: '', selectedMovieVideos: '' })
  }



  render(){
    return (
      <main className='content'>
        <header>
          <img src={img} alt="neatflix logo" className='neatflix-logo'></img>
        </header>
        <Switch>
          <Route  
            exact path='/' 
            render={() => {
              return(
                <MoviesContainer 
                  movies={this.state.allMovies}
                  selectMovie={this.selectMovie}
                />
              )
            }} 
          />
          <Route 
            path='/:id'
            render={({match}) => {
              console.log('match: ', match);
              return(
                <MovieDetail 
                  movie={this.state.selectedMovie}
                  videos={this.state.selectedMovieVideos}
                  clearMovie={this.clearMovie}
                  id={match.params.id}
                />
              )
            }}
          />  
      </Switch>
      </main>
    )
  }


}


// {this.state.error && <h2>Something went wrong! {this.state.error.message}</h2>}
// <MoviesContainer className='movies-contaier' movies={this.state.allMovies}/>


export default App;
