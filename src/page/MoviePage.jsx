import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { Paper } from '@material-ui/core';

import { PAGE_COUNT, MOVIE_TYPE as movieType, PARAMS as params } from '../constants/constants';
import Search from '../components/Search';
import MovieList from '../components/MovieList';
import { movies } from '../actions';

import { getMovies } from '../api/api';
import { FlatPagination } from '../components/FlatPagination/FlatPagination';

const mapStateToProps = ({ search, moviePage }) => ({
  ...moviePage,
  ...search,
});

const mapDispatchToProps = dispatch => ({
  requestMovies: () => dispatch(movies.request()),
  successMovies: payload => dispatch(movies.succsess(payload)),
  failureMovies: () => dispatch(movies.failure()),
  resetSearchMovies: () => dispatch(movies.reset()),
});

@connect(mapStateToProps, mapDispatchToProps)
export default class MoviePage extends React.Component {
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
    const { searchQuery, successMovies } = this.props;
    return getMovies({ searchQuery, page })
      .then(({ movies, totalResults }) => {
        successMovies({
          movies,
          totalResults,
          page,
          showCircular: false,
        });
      });
  }

  loadMovies(page) {
    const {
      type, requestMovies, successMovies, failureMovies, resetSearchMovies,
    } = this.props;
    let url;
    if (type === movieType.POPULAR) {
      url = movieType.POPULAR;
    } else if (type === movieType.UPCOMING) {
      url = movieType.UPCOMING;
    } else if (type === movieType.NOW_PLAYING) {
      url = movieType.NOW_PLAYING;
    }
    url = `${params.URL}${type}`;
    // eslint-disable-next-line no-console
    console.log(url);
    requestMovies();
    return getMovies({ page, url })
      .then(({ movies, totalResults }) => {
        successMovies({
          movies,
          totalResults,
          page,
          showCircular: false,
        });
        resetSearchMovies();
      })
      .catch(() => {
        failureMovies();
      });
  }

  render() {
    const {
      title, movies, page, totalResults, showCircular, isSearch,
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
          <Search />
          <MovieList movies={movies} pageTitle={pageTitle} showCircular={showCircular} />
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
  searchQuery: PropTypes.string.isRequired,
  isSearch: PropTypes.bool.isRequired,
  requestMovies: PropTypes.func,
  successMovies: PropTypes.func,
  failureMovies: PropTypes.func,
  resetSearchMovies: PropTypes.func,
};
