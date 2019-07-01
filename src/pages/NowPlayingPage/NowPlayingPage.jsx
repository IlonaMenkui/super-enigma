import React from 'react';

import { MOVIE_TYPE as type } from '../../app.constants';
import MovieList from '../../components/MovieList/MovieList';

import { getMovies } from '../../api/api';

export default class NowPlayingPage extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    getMovies(type.NOW_PLAYING)
      .then((movies) => {
        this.setState({ movies });
      });
  }

  render() {
    const { movies } = this.state;
    return (
      <MovieList movies={movies} pageTitle="Now playing movies:" />
    );
  }
}
