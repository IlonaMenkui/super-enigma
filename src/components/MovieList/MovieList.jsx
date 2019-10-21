import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Circular from '../Circular';
import MovieListItem from './MovieListItem';

const Title = styled.h1`
  font-size: 35px;
`;

const MoviesWrap = styled.div`
  display: flex;
  flex-flow: column;
  margin: 0 10px 0 10px;
  `;

const MovieList = ({ movies, title, isLoading }) => (
  <main className="movies-wrap">
    <MoviesWrap>
      <Title>
        {(!isLoading && movies.length === 0) ? 'No results' : title}
      </Title>
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
    </MoviesWrap>
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
