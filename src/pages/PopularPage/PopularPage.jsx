import React from 'react';

import { MOVIE_TYPE as type } from '../../app.constants';
import MovieList from '../../components/MovieList/MovieList';

import { getMovies } from '../../api/api';

export default class PopularPage extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    getMovies(type.POPULAR)
      .then((movies) => {
        this.setState({ movies });
      });
  }

  render() {
    return (
      <MovieList movies={this.state.movies} pageTitle="Popular movies:" />
    );
  }
}
