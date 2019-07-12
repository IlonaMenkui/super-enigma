import React from 'react';

import { createStore } from 'redux';

import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

import { searchMoviesByTitle } from '../../api/api';

import './search.css';

function searchMovieObject(movies, action) {
  switch (action.type) {
    case 'GET_SEARCH_MOVIES':
      return movies;
    default:
      return movies;
  }
}

let store = createStore(searchMovieObject);

store.subscribe(() => console.log(store.getState()));

export class Search extends React.Component {
  constructor(props) {
    super(props);
    this.searchQuery = null;
  }

  searchClick = (searchQuery) => {
    if (searchQuery) {
      searchMoviesByTitle(searchQuery)
        .then((movies) => {
          store.dispatch({ movies, type: 'GET_SEARCH_MOVIES' });
        });
    }
  };

  render() {
    return (
      <div className="search">
        <InputBase
          placeholder="Search…"
          className="input"
          inputProps={{ 'aria-label': 'Search' }}
          onChange={(e) => {
            this.searchQuery = e.target.value;
          }}
        />
        <div className="search-icon">
          <SearchIcon
            color="primary"
            onClick={() => this.searchClick(this.searchQuery)}
          />
        </div>
      </div>
    );
  }
}

export default Search;
