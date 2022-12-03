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
    .then((data) => this.setState({ allMovies: data.movies }))
    .catch(error => this.setState({ error: error}))
  }

  render(){
    return (
      <div>
        <h1>test</h1>
        {console.log(this.state.error)}
        {this.state.error && <h2>Something went wrong! {this.state.error.message}</h2>}
        <MoviesContainer movies={this.state.allMovies}/>
      </div>
    )
  }


}


export default App;
