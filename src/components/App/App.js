import './App.css'
//import movieData from '../../movieData';
import fetchData from '../../apiCalls'
import React, { Component } from 'react'
import MoviesContainer from '../Movies_Container/Movies_Container'
import './App.css'
import img from '../../Neatflix_Logos/2.png'
import { Route } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      allMovies: [],
      error: ''
    }
  }

  componentDidMount() {
    fetchData('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then((data) => this.setState({ allMovies: data.movies }))
      .catch(error => this.setState({ error: error }))
  }

  render() {
    return (
      <main className='content'>
        <header>
          <img src={img} alt="neatflix logo" className='neatflix-logo'></img>
        </header>
        {this.state.error && <h2>Something went wrong! {this.state.error.message}</h2>}
        <Route exact path="/" render={() => <MoviesContainer className='movies-contaier' movies={this.state.allMovies}/>} />
        <Route exact path="/:id" 
        
        />
      </main>
    )
  }


}


export default App
