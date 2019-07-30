import React from 'react';
import PropTypes from 'prop-types';

import { Paper, Typography } from '@material-ui/core';

import Circular from '../Circular/Circular';
import MovieListItem from './MovieListItem/MovieListItem';

import './movie-list.css';

const MovieList = ({ movies, pageTitle, showCircular }) => (
  <main className="movies-wrap">
    <Paper>
      <Circular visible={showCircular} />
      <Typography className="heading" variant="h4">{pageTitle}</Typography>
      {movies.map(movie => (
        <MovieListItem
          title={movie.title}
          genres={movie.genres}
          voteAverage={movie.voteAverage}
          overview={movie.overview}
          posterPath={movie.posterPath}
          releaseDate={movie.releaseDate}
          popularity={movie.popularity}
          originalLanguage={movie.originalLanguage}
          voteCount={movie.voteCount}
          originalTitle={movie.originalTitle}
        />
      ))}
    </Paper>
  </main>
);

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageTitle: PropTypes.string.isRequired,
  showCircular: PropTypes.bool.isRequired,
};

export default MovieList;
