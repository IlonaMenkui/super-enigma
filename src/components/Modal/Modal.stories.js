/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import { storiesOf } from '@storybook/react';

import Modal from '.';

const genres = ['Action', 'Romantic'];
const title = 'Movie title';
const overview = 'Some overwiew';
const releaseDate = '2019-08-01';
const posterPath = undefined;
const voteAverage = 10;
const popularity = 100;
const originalTitle = 'Original movie title';
const originalLanguage = 'Original language';
const voteCount = 9;

storiesOf('Modal', module)
  .add('default', () => <Modal posterPath={posterPath} />)
  .add('with genres', () => <Modal posterPath={posterPath} genres={genres} />)
  .add('with title', () => <Modal posterPath={posterPath} title={title} />)
  .add('with overview', () => <Modal posterPath={posterPath} overview={overview} />)
  .add('with voteAverage', () => <Modal posterPath={posterPath} voteAverage={voteAverage} />)
  .add('with releaseDate', () => <Modal posterPath={posterPath} releaseDate={releaseDate} />)
  .add('with popularity', () => <Modal posterPath={posterPath} popularity={popularity} />)
  .add('with originalLanguage', () => <Modal posterPath={posterPath} originalLanguage={originalLanguage} />)
  .add('with voteCount', () => <Modal posterPath={posterPath} voteCount={voteCount} />)
  .add('with originalTitle', () => <Modal posterPath={posterPath} originalTitle={originalTitle} />)
  .add('with all props', () => (
    <Modal
      genres={genres}
      title={title}
      overview={overview}
      posterPath={posterPath}
      voteAverage={voteAverage}
      releaseDate={releaseDate}
      popularity={popularity}
      originalLanguage={originalLanguage}
      voteCount={voteCount}
      originalTitle={originalTitle}
    />
  ));
