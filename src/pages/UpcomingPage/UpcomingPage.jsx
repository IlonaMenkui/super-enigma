import React from 'react';

import { MOVIE_TYPE as type } from '../../app.constants';
import MovieList from '../../components/MovieList/MovieList';

import { getMovies } from '../../api/api';
import { FlatPagination } from '../../components/FlatPagination/FlatPagination';

export default class UpcomingPage extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      page: 1,
    };
  }

  componentDidMount() {
    getMovies(type.UPCOMING)
      .then((movies) => {
        this.setState({ movies });
      });
  }

  render() {
    const { movies } = this.state;
    const { page } = this.state;
    return (
      <div>
        <MovieList movies={movies} pageTitle="Upcoming movies:" />
        <FlatPagination page={page} />
      </div>
    );
  }
}
