import React from 'react';

import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import MovieList from '../components/MovieList';
import {
  request,
  succsess,
  failure,
  reset,
} from '../actions/movies';
import { PARAMS } from '../constants/constants';
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
export default class MovieListContainer extends React.Component {
  componentDidMount() {
    const { page } = this.props;
    this.loadMovies(page);
  }

  componentDidUpdate(prevProps) {
    const { title: prevTitle, page: prevPage, searchQuery: prevSearchQuery } = prevProps;
    const {
      title, page, searchQuery,
    } = this.props;
    if (prevTitle !== title || prevPage !== page
      || (prevSearchQuery !== searchQuery && !searchQuery
      && searchQuery !== undefined && prevSearchQuery !== undefined)) {
      this.loadMovies(page);
    } else if (prevSearchQuery !== searchQuery && searchQuery) {
      this.loadMovies(page, searchQuery);
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
      title, movies, isLoading, searchQuery, type,
    } = this.props;
    const searchTitle = movies.length === 0 ? 'No results' : 'Searching results:';
    const pageTitle = searchQuery ? searchTitle : title;

    return (
      <MovieList movies={movies} title={pageTitle} isLoading={isLoading} type={type} />
    );
  }
}

MovieListContainer.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  page: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  searchQuery: PropTypes.string.isRequired,
  requestLoadMovies: PropTypes.func.isRequired,
  successLoadMovies: PropTypes.func.isRequired,
  failureLoadMovies: PropTypes.func.isRequired,
  resetSearchMovies: PropTypes.func.isRequired,
};
