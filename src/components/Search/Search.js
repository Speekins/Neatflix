import React, { Component } from 'react'

class Search extends Component {
  constructor() {
    super()
    this.state = {
      searchTerm: ''
    }
  }

  handleChange(e) {
    this.setState({ searchTerm: e.target.value })
    if(e.target.value === '') {
      this.props.updateSearchResult()
    }
    this.props.updateSearchResult(this.state.searchTerm)
  }

  render() {
    return (
      <>
        <input id="search" value={this.state.searchTerm} onChange={(event) => this.handleChange(event)} placeholder='Search'></input>
      </>
    )
  }
}

export default Search