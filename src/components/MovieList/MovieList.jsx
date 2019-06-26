import React from 'react';

import { Paper, Typography } from '@material-ui/core';
import { MovieListItem } from './MovieListItem/MovieListItem';


import './movie-list.css';

const MovieList = ({ movies, pageTitle }) => (
  <main className="movies-wrap">
    <Paper>
      <Typography className="heading" variant="h4">{pageTitle}</Typography>
      {movies.map(movie => (
        <MovieListItem
          title={movie.title}
          genres={movie.genres}
          imdbId={movie.imdb_id}
          overview={movie.overview}
          posterPath={movie.poster_path}
        />
      ))}
    </Paper>
  </main>
);

export default MovieList;
