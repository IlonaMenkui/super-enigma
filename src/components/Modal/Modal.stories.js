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
  .add('only with genres', () => <Modal genres={genres} />)
  .add('only with title', () => <Modal title={title} />)
  .add('only with overview', () => <Modal overview={overview} />)
  .add('only with voteAverage', () => <Modal voteAverage={voteAverage} />)
  .add('only with releaseDate', () => <Modal releaseDate={releaseDate} />)
  .add('only with popularity', () => <Modal popularity={popularity} />)
  .add('only with originalLanguage', () => <Modal originalLanguage={originalLanguage} />)
  .add('only with voteCount', () => <Modal voteCount={voteCount} />)
  .add('only with originalTitle', () => <Modal originalTitle={originalTitle} />)
  .add('only with all props', () => (
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
