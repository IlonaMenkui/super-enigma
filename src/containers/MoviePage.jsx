import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { Paper } from '@material-ui/core';

import { PAGE_COUNT } from '../constants/constants';
import SearchContainer from './SearchContainer';
import FlatPagination from '../components/FlatPagination';
import MovieListContainer from './MovieListContainer';
import {
  initSearch,
  resetPagination,
} from '../actions/movies';

@connect(
  state => ({
    ...state,
  }),
  {
    resetPage: resetPagination,
    initSearch,
  },
)
export default class MoviePage extends React.Component {
  changePage(offset) {
    const { resetPage } = this.props;
    resetPage({ page: (offset / PAGE_COUNT + 1) });
  }

  render() {
    const {
      title, totalResults, isLoading, type, page,
    } = this.props;
    return (
      <div>
        <FlatPagination
          onClickPage={(e, offset) => this.changePage(offset)}
          page={page}
          totalResults={totalResults}
        />
        <Paper>
          <SearchContainer title={title} />
          <MovieListContainer
            type={type}
            title={title}
            isLoading={isLoading}
          />
        </Paper>
      </div>
    );
  }
}

MoviePage.propTypes = {
  page: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  totalResults: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  resetPage: PropTypes.func.isRequired,
};
