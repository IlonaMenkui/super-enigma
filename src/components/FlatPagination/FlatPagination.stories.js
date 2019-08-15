/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import FlatPagiinon from '.';

const onClickPage = action('click-on-page');
const totalResults = 50;
const page = 10;

storiesOf('FlatPagination', module)
  .add('default', () => <FlatPagiinon onClickPage={onClickPage} />)
  .add('with total results', () => <FlatPagiinon onClickPage={onClickPage} totalResults={totalResults} />)
  .add('with page', () => <FlatPagiinon onClickPage={onClickPage} page={page} />);
