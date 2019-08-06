import React from 'react';

import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import Search from '../components/Search';
import { ENTER_KEY } from '../constants/constants';
import {
  initSearch,
} from '../actions/movies';

@connect(
  state => ({
    ...state,
  }),
  {
    initSearch,
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
    const { initSearch } = this.props;
    const { searchQuery } = this.state;
    initSearch({ searchQuery, page: 1 });
  };

  onEnterPress = (e) => {
    const { searchQuery } = this.state;
    if (e.charCode === ENTER_KEY) {
      this.onSearchClick(searchQuery);
    }
  }

  onHandleChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  }

  render() {
    const { searchQuery } = this.state;
    return (
      <Search
        onHandleChange={this.onHandleChange}
        onSearchClick={this.onSearchClick}
        onEnterPress={this.onEnterPress}
        searchQuery={searchQuery}
      />
    );
  }
}

SearchContainer.propTypes = {
  initSearch: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
