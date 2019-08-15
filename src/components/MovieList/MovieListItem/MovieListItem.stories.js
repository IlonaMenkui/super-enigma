/* eslint-disable react/jsx-filename-extension */
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
  .add('default', () => <MovieListItem releaseDate={releaseDate} />)
  .add('with genres', () => (<MovieListItem genres={genres} releaseDate={releaseDate} />))
  .add('with title', () => (<MovieListItem title={title} releaseDate={releaseDate} />))
  .add('with overview', () => <MovieListItem releaseDate={releaseDate} overview={overview} />)
  .add('with voteAverage', () => <MovieListItem releaseDate={releaseDate} voteAverage={voteAverage} />)
  .add('with popularity', () => <MovieListItem releaseDate={releaseDate} popularity={popularity} />)
  .add('with originalTitle', () => <MovieListItem releaseDate={releaseDate} originalTitle={originalTitle} />)
  .add('with originalLanguage', () => <MovieListItem releaseDate={releaseDate} originalLanguage={originalLanguage} />)
  .add('with voteCount', () => <MovieListItem releaseDate={releaseDate} voteCount={voteCount} />)
  .add('with all props', () => (
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
  ));
