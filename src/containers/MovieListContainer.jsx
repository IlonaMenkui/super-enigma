import React from 'react';

import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import MovieList from '../components/MovieList';
import {
  request,
  succsess,
  failure,
  reset,
  setPagination,
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
    setPage: setPagination,
  },
)
export default class MovieListContainer extends React.Component {
  componentDidMount() {
    const { page } = this.props;
    this.loadMovies(page);
  }

  componentDidUpdate(prevProps) {
    const { title: prevTitle, page: prevPage, searchQuery: prevSearchQuery } = prevProps;
    const { title, page, searchQuery } = this.props;
    if (prevTitle !== title && !searchQuery) {
      this.loadMovies(page);
    } else if (prevTitle === title && prevPage !== page) {
      this.loadMovies(page, searchQuery);
    } else if (prevSearchQuery !== searchQuery) {
      this.loadMovies(page, searchQuery);
    }
  }

  loadMovies(page, searchQuery) {
    const {
      type, requestLoadMovies, successLoadMovies, failureLoadMovies,
    } = this.props;
    requestLoadMovies();
    const url = searchQuery ? PARAMS.SEARCH_URL : `${PARAMS.URL}${type}`;
    return getMovies({ page, url, searchQuery })
      .then(({ movies, totalResults }) => {
        successLoadMovies({
          movies,
          totalResults,
          isLoading: false,
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
    const searchTitle = 'Searching results:';
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
};