import React, { Component } from 'react'
import './Search.css'

class Search extends Component {
  constructor() {
    super()
    this.state = {
      searchTerm: ''
    }
  }

  handleChange(e) {
    this.setState({ searchTerm: e.target.value })
    this.props.updateSearchResult(e.target.value)
  }

  render() {
    return (
        <input
          id="search"
          className='movie-search'
          value={this.state.searchTerm}
          onChange={(event) => this.handleChange(event)}
          placeholder='Search'>
        </input>
    )
  }
}

export default Search