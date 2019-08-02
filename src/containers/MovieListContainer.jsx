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
      title, movies, isLoading, isSearch, type,
    } = this.props;
    const searchTitle = movies.length === 0 ? 'No results' : 'Searching results:';
    const pageTitle = isSearch ? searchTitle : title;

    return (
      <MovieList movies={movies} title={pageTitle} isLoading={isLoading} type={type} />
    );
  }
}

MovieListContainer.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  page: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isSearch: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  searchQuery: PropTypes.string.isRequired,
  requestLoadMovies: PropTypes.func.isRequired,
  successLoadMovies: PropTypes.func.isRequired,
  failureLoadMovies: PropTypes.func.isRequired,
  resetSearchMovies: PropTypes.func.isRequired,
  isSearchChange: PropTypes.bool.isRequired,
};
