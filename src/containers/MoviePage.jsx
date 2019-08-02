import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { Paper } from '@material-ui/core';

import { PAGE_COUNT, PARAMS } from '../constants/constants';
import SearchContainer from './SearchContainer';
import FlatPagination from '../components/FlatPagination';
import MovieList from '../components/MovieList';
import {
  request,
  succsess,
  failure,
  reset,
} from '../actions/movies';

import { getMovies } from '../api/api';

@connect(
  state => ({
    ...state,
  }),
  {
    requestLoadMovies: request,
    successLoadMovies: succsess,
    failureLoadMovies: failure,
    resetSearchMovies: reset,
  },
)
export default class MoviePage extends React.Component {
  componentDidMount() {
    const { page } = this.props;
    this.loadMovies(page);
  }

  componentDidUpdate(prevProps) {
    const { title: prevTitle } = prevProps;
    const {
      title, searchQuery, isSearchChange,
    } = this.props;
    if (prevTitle !== title) {
      this.loadMovies(1);
    } else if (searchQuery && isSearchChange) {
      this.loadMovies(1, searchQuery);
    }
  }

  changePage(offset) {
    const page = offset / PAGE_COUNT + 1;
    const { searchQuery } = this.props;
    if (searchQuery) {
      this.loadMovies(page, searchQuery);
    } else {
      this.loadMovies(page);
    }
  }

  loadMovies(page, searchQuery) {
    const {
      type, requestLoadMovies, successLoadMovies, failureLoadMovies, resetSearchMovies,
    } = this.props;
    requestLoadMovies();
    if (!searchQuery) {
      const url = `${PARAMS.URL}${type}`;
      return getMovies({ page, url })
        .then(({ movies, totalResults }) => {
          successLoadMovies({
            movies,
            totalResults,
            page,
            isLoading: false,
          });
          resetSearchMovies();
        })
        .catch(() => {
          failureLoadMovies();
        });
    }
    return getMovies({ searchQuery, page, url: PARAMS.SEARCH_URL })
      .then(({ movies, totalResults }) => {
        successLoadMovies({
          movies,
          totalResults,
          page,
          isLoading: false,
          searchQuery,
          isSearch: true,
          isSearchChange: false,
        });
      })
      .catch(() => {
        failureLoadMovies();
      });
  }

  render() {
    const {
      title, movies, page, totalResults, isLoading, isSearch,
    } = this.props;

    const searchTitle = movies.length === 0 ? 'No results' : 'Searching results:';
    const pageTitle = isSearch ? searchTitle : title;

    return (
      <div>
        <FlatPagination
          onClickPage={(e, offset) => this.changePage(offset)}
          page={page}
          totalResults={totalResults}
        />
        <Paper>
          <SearchContainer title={pageTitle} />
          <MovieList movies={movies} pageTitle={pageTitle} isLoading={isLoading} />
        </Paper>
      </div>
    );
  }
}

MoviePage.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  page: PropTypes.number.isRequired,
  totalResults: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
  searchQuery: PropTypes.string.isRequired,
  isSearch: PropTypes.bool.isRequired,
  requestLoadMovies: PropTypes.func.isRequired,
  successLoadMovies: PropTypes.func.isRequired,
  failureLoadMovies: PropTypes.func.isRequired,
  resetSearchMovies: PropTypes.func.isRequired,
  isSearchChange: PropTypes.bool.isRequired,
};
