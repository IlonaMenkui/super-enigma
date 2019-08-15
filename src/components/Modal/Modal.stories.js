/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import { storiesOf } from '@storybook/react';

import Modal from '.';

const genres = ['Action', 'Romantic'];
const title = 'Movie title';
const overview = 'Some overwiew';
const releaseDate = '2019-08-01';
const voteAverage = 10;
const popularity = 100;
const originalTitle = 'Original movie title';
const originalLanguage = 'Original language';
const voteCount = 9;

storiesOf('Modal', module)
  .add('default', () => <Modal />)
  .add('with genres', () => <Modal genres={genres} />)
  .add('with title', () => <Modal title={title} />)
  .add('with overview', () => <Modal overview={overview} />)
  .add('with voteAverage', () => <Modal voteAverage={voteAverage} />)
  .add('with releaseDate', () => <Modal releaseDate={releaseDate} />)
  .add('with popularity', () => <Modal popularity={popularity} />)
  .add('with originalLanguage', () => <Modal originalLanguage={originalLanguage} />)
  .add('with voteCount', () => <Modal voteCount={voteCount} />)
  .add('with originalTitle', () => <Modal originalTitle={originalTitle} />)
  .add('with all props', () => (
    <Modal
      genres={genres}
      title={title}
      overview={overview}
      voteAverage={voteAverage}
      releaseDate={releaseDate}
      popularity={popularity}
      originalLanguage={originalLanguage}
      voteCount={voteCount}
      originalTitle={originalTitle}
    />
  ));
