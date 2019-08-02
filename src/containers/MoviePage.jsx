import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { Paper } from '@material-ui/core';

import { PAGE_COUNT } from '../constants/constants';
import SearchContainer from './SearchContainer';
import FlatPagination from '../components/FlatPagination';
import MovieListContainer from './MovieListContainer';

@connect(
  state => ({
    ...state,
  }),
)
export default class MoviePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
    };
  }

  changePage(offset) {
    this.setState({ page: offset / PAGE_COUNT + 1 });
  }

  render() {
    const {
      title, totalResults, isLoading, type,
    } = this.props;
    const { page } = this.state;
    return (
      <div>
        <FlatPagination
          onClickPage={(e, offset) => this.changePage(offset)}
          page={page}
          totalResults={totalResults}
        />
        <Paper>
          <SearchContainer />
          <MovieListContainer page={page} type={type} title={title} isLoading={isLoading} />
        </Paper>
      </div>
    );
  }
}

MoviePage.propTypes = {
  title: PropTypes.string.isRequired,
  totalResults: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
};
