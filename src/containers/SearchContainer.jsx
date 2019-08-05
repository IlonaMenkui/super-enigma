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

  componentDidUpdate(prevProps) {
    const { title: prevTitle } = prevProps;
    const { title } = this.props;
    if (prevTitle !== title) {
      this.setState({ searchQuery: '' });
    }
  }

  onSearchClick = () => {
    const { searchMovies, setQuery } = this.props;
    const { searchQuery } = this.state;
    setQuery({ searchQuery });
    searchMovies(
      { searchQuery },
    );
  };

  onEnterPress = (e) => {
    const { setQuery } = this.props;
    const { searchQuery } = this.state;
    if (e.charCode === ENTER_KEY) {
      setQuery({ searchQuery });
      this.onSearchClick(searchQuery);
    }
  }

  onHandleChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  }

  render() {
    const { setQuery } = this.props;
    const { searchQuery } = this.state;
    return (
      <Search
        onHandleChange={this.onHandleChange}
        onSearchClick={this.onSearchClick}
        onEnterPress={this.onEnterPress}
        searchQuery={searchQuery}
        setQuery={setQuery}
      />
    );
  }
}

SearchContainer.propTypes = {
  setQuery: PropTypes.func.isRequired,
  searchMovies: PropTypes.func.isRequired,
};
