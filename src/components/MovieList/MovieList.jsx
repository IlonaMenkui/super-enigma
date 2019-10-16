/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';

import { Paper, Typography } from '@material-ui/core';

import Circular from '../Circular/Circular.jsx';
import MovieListItem from './MovieListItem/MovieListItem.jsx';

import './movie-list.css';

const MovieList = ({ movies, title, isLoading }) => (
  <main className="movies-wrap">
    <Paper>
      <Typography className="heading" variant="h4">
        {(!isLoading && movies.length === 0) ? 'No results' : title}
      </Typography>
      {isLoading ? <Circular />
        : (
          <>
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
          </>
        )}
    </Paper>
  </main>
);

MovieList.defaultProps = {
  movies: [],
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default MovieList;
