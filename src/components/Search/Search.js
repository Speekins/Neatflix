import React, { Component } from 'react'
import './Search.css'
import PropTypes from 'prop-types';

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
      <>
        <input
          id="search"
          className='movie-search'
          value={this.state.searchTerm}
          onChange={(event) => this.handleChange(event)}
          placeholder='Search'>
        </input>
      </>
    )
  }
}

export default Search

Search.propTypes = {
  updateSearchResult: PropTypes.func.isRequired
}