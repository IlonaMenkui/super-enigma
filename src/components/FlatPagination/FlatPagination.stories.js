/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import FlatPagiinon from '.';

const onClichPage = action('click-on-page');
const totalResults = 20;
const page = 1;

storiesOf('FlatPagination', module)
  .add('default', () => <FlatPagiinon onClickPage={onClichPage} totalResults={totalResults} />)
  .add('with page', () => <FlatPagiinon onClickPage={onClichPage} totalResults={totalResults} page={page} />);
