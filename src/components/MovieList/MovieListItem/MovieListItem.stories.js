import React from 'react';

import { storiesOf } from '@storybook/react';

import MovieListItem from '.';

const genres = ['Action', 'Romantic'];
const title = 'Movie title';
const overview = 'Some overwiew';
const releaseDate = '2019-08-01';
const voteAverage = 10;
const popularity = 100;
const originalTitle = 'Original movie title';
const originalLanguage = 'Original language';
const voteCount = 9;

storiesOf('MovieListItem', module)
  .add('default', () => (
    <MovieListItem
      genres={genres}
      overview={overview}
      releaseDate={releaseDate}
      title={title}
      voteAverage={voteAverage}
      popularity={popularity}
      originalLanguage={originalLanguage}
      originalTitle={originalTitle}
      voteCount={voteCount}
    />
  ))
  .add('only with genres', () => (<MovieListItem genres={genres} releaseDate={releaseDate} />))
  .add('only with title', () => (<MovieListItem title={title} releaseDate={releaseDate} />))
  .add('only with overview', () => <MovieListItem releaseDate={releaseDate} overview={overview} />)
  .add('only with vote average', () => <MovieListItem releaseDate={releaseDate} voteAverage={voteAverage} />)
  .add('only with popularity', () => <MovieListItem releaseDate={releaseDate} popularity={popularity} />)
  .add('only with original title', () => <MovieListItem releaseDate={releaseDate} originalTitle={originalTitle} />)
  .add('only with original language', () => <MovieListItem releaseDate={releaseDate} originalLanguage={originalLanguage} />)
  .add('only with vote count', () => <MovieListItem releaseDate={releaseDate} voteCount={voteCount} />)
  .add('without any data', () => (
    <MovieListItem releaseDate={releaseDate} />
  ));
