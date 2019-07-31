import React from 'react';

import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import Search from '../components/Search';
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
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: null,
    };
  }

  onSearchClick = () => {
    const { searchMovies, setQuery } = this.props;
    const { searchQuery } = this.state;
    setQuery({ searchQuery });
    if (searchQuery) {
      searchMovies(
        { searchQuery, isSearch: true, isSearchChange: true },
      );
    }
  };

  onEnterPress = (e) => {
    if (e.charCode === ENTER_KEY) {
      const { setQuery } = this.props;
      const { searchQuery } = this.state;
      setQuery({ searchQuery });
      this.onSearchClick(searchQuery);
    }
  }

  onHandleChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  }

  render() {
    const { isSearch, setQuery } = this.props;
    const { searchQuery } = this.state;
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
  setQuery: PropTypes.func.isRequired,
  searchMovies: PropTypes.func.isRequired,
};
