import React from 'react';

import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import Search from '../components/Search/Search';
import { ENTER_KEY } from '../constants/constants';
import {
  searching,
  setSearchQuery,
} from '../actions/movies';

@connect(
  state => ({
    ...state,
  }),
  {
    searchMovies: searching,
    setQuery: setSearchQuery,
  },
)
export default class SearchContainer extends React.Component {
  onSearchClick = () => {
    const { searchMovies, searchQuery } = this.props;
    if (searchQuery) {
      searchMovies(
        { searchQuery, isSearch: true },
      );
    }
  };

  onEnterPress = (e) => {
    if (e.charCode === ENTER_KEY) {
      this.searchClick(this.searchQuery);
    }
  }

  onHandleChange = (e) => {
    const { setQuery } = this.props;
    setQuery({ searchQuery: e.target.value, isSearchChange: true });
  }

  render() {
    const { isSearch, searchQuery, setQuery } = this.props;
    return (
      <Search
        onHandleChange={this.onHandleChange}
        onSearchClick={this.onSearchClick}
        onEnterPress={this.onEnterPress}
        isSearch={isSearch}
        searchQuery={searchQuery}
        setQuery={setQuery}
      />
    );
  }
}

SearchContainer.propTypes = {
  isSearch: PropTypes.bool.isRequired,
  searchQuery: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
  searchMovies: PropTypes.func.isRequired,
};
