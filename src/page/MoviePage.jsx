import React from 'react';
import PropTypes from 'prop-types';

import { Paper } from '@material-ui/core';

import { PAGE_COUNT } from '../constants/constants';
import { MOVIES } from '../constants/actions';
import Search from '../containers/Search';
import MovieList from '../components/MovieList/MovieList';

import { getMovies } from '../api/api';
import { FlatPagination } from '../components/FlatPagination/FlatPagination';

export default class MoviePage extends React.Component {
  componentDidMount() {
    const { page } = this.props;
    this.loadMovies(page);
  }

  componentDidUpdate(prevProps) {
    const { title: prevTitle } = prevProps;
    const { title } = this.props;
    if (prevTitle !== title) {
      this.loadMovies(1);
    }
  }

  changePage(offset) {
    const page = offset / PAGE_COUNT + 1;
    this.loadMovies(page);
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
      title, movies, page, totalResults, showCircular,
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
          <MovieList movies={movies} pageTitle={title} showCircular={showCircular} />
        </Paper>
      </div>
    );
  }
}

MoviePage.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
