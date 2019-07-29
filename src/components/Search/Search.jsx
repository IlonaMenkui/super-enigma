import React from 'react';

import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

import { ENTER_KEY } from '../../constants/constants';
import {
  searching,
  setSearchQuery,
} from '../../actions/movies';

import './search.css';

@connect(
  ({ search }) => ({
    ...search,
  }),
  dispatch => ({
    searchMovies: payload => dispatch(searching(payload)),
    setQuery: payload => dispatch(setSearchQuery(payload)),
  }),
)
export default class Search extends React.Component {
  searchClick = (searchQuery) => {
    const { searchMovies } = this.props;
    if (searchQuery) {
      searchMovies(
        { searchQuery, isSearch: true },
      );
    }
  };

  render() {
    const { isSearch, searchQuery, setQuery } = this.props;
    return (
      <div className="search-wrap">
        <InputBase
          placeholder="Search…"
          className="input"
          inputProps={{ 'aria-label': 'Search' }}
          onKeyPress={(e) => {
            if (e.charCode === ENTER_KEY) {
              this.searchClick(this.searchQuery);
            }
          }}
          onChange={(e) => {
            this.searchQuery = e.target.value;
            setQuery({ isSearch });
          }}
          value={searchQuery}
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

Search.propTypes = {
  isSearch: PropTypes.bool.isRequired,
  searchQuery: PropTypes.string.isRequired,
};
