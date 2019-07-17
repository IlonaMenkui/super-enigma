import React from 'react';
import PropTypes from 'prop-types';

import { Paper } from '@material-ui/core';

import { PAGE_COUNT } from '../constants/constants';
import { MOVIES } from '../constants/actions';
import Search from '../containers/Search';
import MovieList from '../components/MovieList/MovieList';

import { getMovies, getSearchMovies } from '../api/api';
import { FlatPagination } from '../components/FlatPagination/FlatPagination';

export default class MoviePage extends React.Component {
  componentDidMount() {
    const { page } = this.props;
    this.loadMovies(page);
  }

  componentDidUpdate(prevProps) {
    const { title: prevTitle, searchQuery: prevSearchQuery } = prevProps;
    const {
      title, isSearch, searchQuery, page,
    } = this.props;
    if (prevTitle !== title) {
      this.loadMovies(1);
    }
    if (isSearch && prevSearchQuery !== searchQuery) {
      this.searchMovies(page);
    }
  }

  changePage(offset) {
    const page = offset / PAGE_COUNT + 1;
    const { isSearch } = this.props;
    if (isSearch) {
      this.searchMovies(page);
    } else {
      this.loadMovies(page);
    }
  }

  searchMovies(page) {
    const { searchQuery, getActionDispatcher } = this.props;
    return getSearchMovies(searchQuery, page)
      .then(({ movies, totalResults }) => {
        getActionDispatcher({
          type: MOVIES.LOAD,
          payload: {
            movies,
            totalResults,
            page,
            showCircular: false,
          },
        })();
      });
  }

  loadMovies(page) {
    const { type, getActionDispatcher } = this.props;
    return getMovies(type, page)
      .then(({ movies, totalResults }) => {
        getActionDispatcher({
          type: MOVIES.LOAD,
          payload: {
            movies,
            totalResults,
            page,
            showCircular: false,
          },
        })();
        getActionDispatcher({
          type: MOVIES.SEARCH_RESET,
        })();
      });
  }

  render() {
    const {
      title, movies, page, totalResults, showCircular, isSearch,
    } = this.props;

    return (
      <div>
        <FlatPagination
          onClickPage={(e, offset) => this.changePage(offset)}
          page={page}
          totalResults={totalResults}
        />
        <Paper>
          <Search />
          <MovieList movies={movies} pageTitle={movies.length === 0 && isSearch ? 'No results' : isSearch ? 'Searching results:' : title} showCircular={showCircular} />
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
  showCircular: PropTypes.bool.isRequired,
  getActionDispatcher: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
  isSearch: PropTypes.bool.isRequired,
};
