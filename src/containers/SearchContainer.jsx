import React from 'react';

import { connect } from 'react-redux';

import PropTypes from 'prop-types';

// import SearchIcon from '@material-ui/icons/Search';
// import InputBase from '@material-ui/core/InputBase';

import Search from '../components/Search/Search';
import { ENTER_KEY } from '../constants/constants';
import {
  searching,
  setSearchQuery,
} from '../actions/movies';

@connect(
  ({ search }) => ({
    ...search,
  }),
  {
    searchMovies: searching,
    setQuery: setSearchQuery,
  },
)
export default class SearchContainer extends React.Component {
  searchClick = (searchQuery) => {
    const { searchMovies } = this.props;
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
    const { setQuery, isSearch } = this.props;
    this.searchQuery = e.target.value;
    setQuery({ isSearch });
  }

  onSearchClick = () => {
    this.searchClick(this.searchQuery);
  }

  render() {
    const { isSearch, searchQuery, setQuery } = this.props;
    return (
      <Search
        searchClick={this.searchClick}
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
