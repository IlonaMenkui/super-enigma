import React from 'react';

import { MOVIE_TYPE as type } from '../../app.constants';
import MovieList from '../../components/MovieList/MovieList';

import { getMovies } from '../../api/api';
import { FlatPagination } from '../../components/FlatPagination/FlatPagination';

export default class NowPlayingPage extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      page: 1,
      totalResults: 12,
    };
  }

  componentDidMount() {
    getMovies(type.NOW_PLAYING, this.state.page)
      .then(({ movies }) => {
        this.setState({ movies });
      });
  }

  changePage(page) {
    getMovies(type.NOW_PLAYING, page)
      .then(({ movies, totalResults }) => {
        this.setState({ movies, totalResults });
      });
  }

  render() {
    const { movies, page } = this.state;
    return (
      <div>
        <FlatPagination onClickPage={(e, offset) => this.changePage(offset / 10 + 1)} page={page} totalResults={this.state.totalResults} />
        <MovieList movies={movies} pageTitle="Now playing movies:" />
      </div>
    );
  }
}
