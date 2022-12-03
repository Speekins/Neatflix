import './App.css';
//import movieData from '../../movieData';
import fetchData from '../../apiCalls';
import React, { Component } from 'react';
import MoviesContainer from '../Movies_Container/Movies_Container';

class App extends Component {
  constructor(){
    super();
    this.state = {
      allMovies: [],
      error: ''
    }
  }

  componentDidMount() {
    fetchData('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then((data) => this.setState({ allMovies: data.movies, error: '' }))
  }

  render(){
    return (
      <div>
        <h1>test</h1>
        {this.state.error && <h2>Something went wrong!</h2>}
        <MoviesContainer movies={this.state.allMovies}/>
      </div>
    )
  }


}


export default App;
