import React from 'react';
import PropTypes from 'prop-types';

import { PAGE_COUNT } from '../app.constants';
import MovieList from '../components/MovieList/MovieList';

import { getMovies } from '../api/api';
import { FlatPagination } from '../components/FlatPagination/FlatPagination';

export default class MoviePage extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      page: 1,
      totalResults: { PAGE_COUNT },
    };
  }

  componentDidMount() {
    this.loadMovies();
  }

  componentWillUpdate() {
    this.loadMovies();
  }

  changePage(page) {
    this.setState({ page });
    this.loadMovies();
  }

  loadMovies() {
    const { type } = this.props;
    const { page } = this.state;
    getMovies(type, page)
      .then(({ movies, totalResults }) => {
        this.setState({ movies, totalResults });
      });
  }

  render() {
    const { title } = this.props;
    const { movies, page, totalResults } = this.state;
    return (
      <div>
        <FlatPagination
          onClickPage={(e, offset) => this.changePage(offset / PAGE_COUNT + 1)}
          page={page}
          totalResults={totalResults}
        />
        <MovieList movies={movies} pageTitle={title} />
      </div>
    );
  }
}

MoviePage.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
