import React from 'react';

import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

import { searchMoviesByTitle } from '../../api/api';
import { MOVIES } from '../../constants/actions';

import './search.css';

export class Search extends React.Component {
  constructor(props) {
    super(props);
    this.searchQuery = null;
  }

  searchClick = (searchQuery) => {
    if (searchQuery) {
      searchMoviesByTitle(searchQuery)
        .then((payload) => {
          const dispatch = this.props.getActionDispatcher({ payload, type: MOVIES.SEARCH });
          dispatch();
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
