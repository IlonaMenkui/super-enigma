import React from 'react';
import PropTypes from 'prop-types';

import Circular from '../Circular';
import MovieListItem from './MovieListItem';

import * as styles from './movie-list';

const MovieList = ({ movies, title, isLoading }) => (
  <main className="movies-wrap">
    <styles.MoviesWrap>
      <styles.Title>
        {(!isLoading && movies.length === 0) ? 'No results' : title}
      </styles.Title>
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
    </styles.MoviesWrap>
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
