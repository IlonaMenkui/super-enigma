import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { Paper } from '@material-ui/core';

import { PAGE_COUNT } from '../constants/constants';
import { MOVIES } from '../constants/actions';
import Search from '../components/Search';
import MovieList from '../components/MovieList';

import { getMovies, getSearchMovies } from '../api/api';
import { FlatPagination } from '../components/FlatPagination/FlatPagination';

class MoviePage extends React.Component {
  componentDidMount() {
    const { page } = this.props;
    this.loadMovies(page);
  }

  componentDidUpdate(prevProps) {
    const { title: prevTitle, searchQuery: prevSearchQuery } = prevProps;
    const {
      title, isSearch, searchQuery,
    } = this.props;
    if (prevTitle !== title) {
      this.loadMovies(1);
    }
    if (isSearch && prevSearchQuery !== searchQuery) {
      this.searchMovies(1);
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
    getActionDispatcher({
      type: MOVIES.REQUEST,
    })();
    return getMovies(type, page)
      .then(({ movies, totalResults }) => {
        getActionDispatcher({
          type: MOVIES.LOAD_SUCCESS,
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
      })
      .catch(() => {
        getActionDispatcher({
          type: MOVIES.FAILURE,
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

const mapStateToProps = ({ search, moviePage }) => ({
  ...moviePage,
  ...search,
});

const mapDispatchToProps = dispatch => ({
  getActionDispatcher: action => () => dispatch(action),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MoviePage);

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
