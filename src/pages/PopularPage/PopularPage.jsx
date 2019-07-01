import React from 'react';

import { MOVIE_TYPE as type } from '../../app.constants';
import MovieList from '../../components/MovieList/MovieList';

import { getMovies } from '../../api/api';
import { FlatPagination } from '../../components/FlatPagination/FlatPagination';

export default class PopularPage extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      page: 1,
      totalResults: 12,
    };
  }

  componentDidMount() {
    getMovies(type.POPULAR, this.state.page)
      .then(({ movies }) => {
        this.setState({ movies });
      });
  }

  changePage(page) {
    getMovies(type.POPULAR, page)
      .then(({ movies, totalResults }) => {
        this.setState({ movies, totalResults });
      });
  }

  render() {
    const { movies, page } = this.state;
    return (
      <div>
        <FlatPagination onClickPage={(e, offset) => this.changePage(offset / 10 + 1)} page={page} totalResults={this.state.totalResults} />
        <MovieList movies={movies} pageTitle="Popular movies:" />
      </div>
    );
  }
}
