/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import FlatPagiinon from '.';

storiesOf('FlatPagination', module)
  .add('default', () => <FlatPagiinon />)
  .add('with total results', () => <FlatPagiinon totalResults="25" />)
  .add('with page', () => <FlatPagiinon page="2" />)
  .add('with onClichPage func',
    () => <FlatPagiinon onClickPage={action('click-on-page')} />)
  .add('with all props',
    () => (
      <FlatPagiinon
        totalResults="220"
        page="8"
        onClickPage={action('click-on-page')}
      />
    ));
