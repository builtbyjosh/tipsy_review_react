import React, { Component } from 'react';

class Search extends Component {
  state = {
    query: ''
  }

  handleChange = (e) => {
    this.setState({[e.targe.query]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <label htmlFor="">Search for Brewery</label>
          <input
            type="text"
            query="query"
            value={this.state.query}
            onChange={this.handleChange}
          />
      </div>
    );
  }
}

export default Search;
