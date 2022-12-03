import './App.css';
import movieData from '../../movieData';
import React, { Component } from 'react';
import MoviesContainer from '../Movies_Container/Movies_Container';

class App extends Component {
  constructor(){
    super();
    this.state = {
      allMovies: []
    }
  }

  componentDidMount() {
    this.setState({allMovies: movieData.movies});
  }

  render(){
    return (
      <div>
        <h1>test</h1>
        <MoviesContainer movies={this.state.allMovies}/>
      </div>
    )
  }


}


export default App;
