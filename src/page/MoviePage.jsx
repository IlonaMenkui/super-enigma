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
      totalResults: 0,
      circularVisibility: '',
    };
  }

  componentDidMount() {
    this.loadMovies(1);
    let { circularVisibility } = this.state;
    circularVisibility = '';
    this.setState({ circularVisibility });
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
    const { type } = this.props;
    getMovies(type, page)
      .then(({ movies, totalResults }) => {
        this.setState({ movies, totalResults, page });
      });
  }

  render() {
    const { title } = this.props;
    const {
      movies, page, totalResults, circularVisibility,
    } = this.state;
    return (
      <div>
        <FlatPagination
          onClickPage={(e, offset) => this.changePage(offset)}
          page={page}
          totalResults={totalResults}
        />
        <MovieList movies={movies} pageTitle={title} circularVisibility={circularVisibility} />
      </div>
    );
  }
}

MoviePage.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
