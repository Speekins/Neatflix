import logo from './logo.svg';
import './App.css';
import movieData from '../../movieData';
import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      allMovies: []
    }
  }

  componentDidMount() {
    this.setState({allMovies: movieData.movies})
  }
}


export default App;
