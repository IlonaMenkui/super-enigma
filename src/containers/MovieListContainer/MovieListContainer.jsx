import React from 'react';

import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import MovieList from '../../components/MovieList';
import { load } from '../../actions/movies';
import { PARAMS } from '../../constants';

@connect(
  ({
    movies, isLoading, searchQuery, cachedGenres, page,
  }) => ({
    movies, isLoading, searchQuery, cachedGenres, page,
  }),
  {
    dispatchLoadMoviesAction: load,
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
    const { type, dispatchLoadMoviesAction, cachedGenres } = this.props;
    const url = searchQuery ? PARAMS.SEARCH_URL : `${PARAMS.URL}${type}`;
    dispatchLoadMoviesAction({ searchQuery, url, cachedGenres, page });
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
  dispatchLoadMoviesAction: PropTypes.func.isRequired,
  cachedGenres: PropTypes.arrayOf(PropTypes.object).isRequired,
};
