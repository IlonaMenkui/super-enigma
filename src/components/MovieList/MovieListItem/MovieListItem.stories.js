/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import { storiesOf } from '@storybook/react';

import MovieListItem from '.';
import noImg from '../../../static/images/no-img.png';

const genres = ['Action', 'Romantic'];
const title = 'Movie title';
const overview = 'Some overwiew';
const releaseDate = '2019-08-01';
const posterPath = noImg;
const voteAverage = 10;
const popularity = 100;
const originalTitle = 'Original movie title';
const originalLanguage = 'Original language';
const voteCount = 9;

storiesOf('MovieListItem', module)
  .add('default', () => <MovieListItem posterPath={posterPath} releaseDate={releaseDate} />)
  .add('with genres', () => (<MovieListItem genres={genres} releaseDate={releaseDate} posterPath={posterPath} />))
  .add('with title', () => (<MovieListItem title={title} releaseDate={releaseDate} posterPath={posterPath} />))
  .add('with overview', () => <MovieListItem posterPath={posterPath} releaseDate={releaseDate} overview={overview} />)
  .add('with voteAverage', () => <MovieListItem posterPath={posterPath} releaseDate={releaseDate} voteAverage={voteAverage} />)
  .add('with popularity', () => <MovieListItem posterPath={posterPath} releaseDate={releaseDate} popularity={popularity} />)
  .add('with originalTitle', () => <MovieListItem posterPath={posterPath} releaseDate={releaseDate} originalTitle={originalTitle} />)
  .add('with originalLanguage', () => <MovieListItem posterPath={posterPath} releaseDate={releaseDate} originalLanguage={originalLanguage} />)
  .add('with voteCount', () => <MovieListItem posterPath={posterPath} releaseDate={releaseDate} voteCount={voteCount} />)
  .add('with all props', () => (
    <MovieListItem
      genres={genres}
      posterPath={posterPath}
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
