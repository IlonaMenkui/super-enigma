import React from 'react';

import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

import { searchMoviesByTitle } from '../../api/api';

import './search.css';

export class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: null,
    };
  }

  searchClick = (text) => {
    if (text === '') {
      this.state.text = null;
    }
    console.log(this.state.text);
  };

  render() {
    const { text } = this.state;
    return (
      <div className="search">
        <InputBase
          placeholder="Search…"
          className="input"
          inputProps={{ 'aria-label': 'Search' }}
          onChange={(e) => {
            this.setState({ text: e.target.value });
            searchMoviesByTitle(text);
          }}
        />
        <div className="search-icon">
          <SearchIcon
            color="primary"
            onClick={this.searchClick(text)}
          />
        </div>
      </div>
    );
  }
}

export default Search;
