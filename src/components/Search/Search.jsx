import React from 'react';

import { createStore } from 'redux';
import { connect } from 'react-redux';

import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

import { searchMoviesByTitle } from '../../api/api';

import './search.css';

function searchMovieObject(state, action) {
  switch (action.type) {
    case 'GET_SEARCH_MOVIES':
      return action.movies;
    default:
      return state;
  }
}

const store = createStore(searchMovieObject);

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

const mapStateToProps = state => ({
  ...state,
});

export default connect(
  mapStateToProps,
  null,
)(Search);
