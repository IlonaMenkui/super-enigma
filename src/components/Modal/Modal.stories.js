/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import { storiesOf } from '@storybook/react';

import Modal from '.';

// genres, title, overview, posterPath, voteAverage, releaseDate, popularity,
// originalLanguage, voteCount, originalTitle,

storiesOf('Modal', module)
  .add('default', () => <Modal />)
  .add('with genres', () => <Modal genres={['Genres']} />)
  .add('with title', () => <Modal title="Title" />)
  .add('with overview', () => <Modal overview="Overview" />)
  .add('with posterPath', () => <Modal posterPath="." />)
  .add('with voteAverage', () => <Modal voteAverage="1000" />)
  .add('with releaseDate', () => <Modal releaseDate="2019.02.30" />)
  .add('with popularity', () => <Modal popularity="199.9" />)
  .add('with originalLanguage', () => <Modal originalLanguage="ru" />)
  .add('with voteCount', () => <Modal voteCount="10" />)
  .add('with originalTitle', () => <Modal originalTitle="Original title" />)
  .add('with all props', () => (
    <Modal
      genres={['Genres']}
      title="Title"
      overview="Overview"
      posterPath="."
      voteAverage="1000"
      releaseDate="2019.02.30"
      popularity="199.9"
      originalLanguage="ru"
      voteCount="10"
      originalTitle="Original title"
    />
  ));
