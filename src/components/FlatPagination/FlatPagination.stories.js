/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import FlatPagiinon from '.';

const onClickPage = action('click-on-page');
const totalResults = 100;
const page = 3;

storiesOf('FlatPagination', module)
  .add('default', () => <FlatPagiinon onClickPage={onClickPage} page={page} totalResults={totalResults} />)
  .add('only with total results', () => <FlatPagiinon onClickPage={onClickPage} totalResults={totalResults} />)
  .add('only with selected page', () => <FlatPagiinon onClickPage={onClickPage} page={page} />)
  .add('without any data', () => <FlatPagiinon onClickPage={onClickPage} />);
