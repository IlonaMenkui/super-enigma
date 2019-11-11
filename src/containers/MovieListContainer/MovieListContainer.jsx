import React from 'react';

import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import MovieList from '../../components/MovieList';
import {
  request,
  succsess,
  failure,
  cacheGenres as cacheGenresAction,
} from '../../actions/movies';
import { PARAMS } from '../../constants';
import getMovies from '../../api';

@connect(
  state => ({
    ...state,
  }),
  {
    requestLoadMovies: request,
    successLoadMovies: succsess,
    failureLoadMovies: failure,
    cacheGenres: cacheGenresAction,
  },
)
export default class MovieListContainer extends React.PureComponent {
  componentDidMount() {
    const { page } = this.props;
    this.loadMovies(page);
  }

  componentDidUpdate(prevProps) {
    const { title: prevTitle, page: prevPage, searchQuery: prevSearchQuery } = prevProps;
    const { title, page, searchQuery } = this.props;
    if (prevTitle !== title || prevSearchQuery !== searchQuery || prevPage !== page) {
      this.loadMovies(page, searchQuery);
    }
  }

  loadMovies(page, searchQuery) {
    const {
      type, requestLoadMovies, successLoadMovies, failureLoadMovies,
      cachedGenres, cacheGenres,
    } = this.props;
    requestLoadMovies();
    const url = searchQuery ? PARAMS.SEARCH_URL : `${PARAMS.URL}${type}`;
    return getMovies({
      page, url, searchQuery, cachedGenres,
    })
      .then(({
        movies, totalResults, totalPages, genres,
      }) => {
        if (cachedGenres.length === 0) {
          cacheGenres({ cachedGenres: genres });
        }
        successLoadMovies({
          movies,
          totalResults,
          totalPages,
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
  cachedGenres: PropTypes.arrayOf(PropTypes.object).isRequired,
  cacheGenres: PropTypes.func.isRequired,
};
