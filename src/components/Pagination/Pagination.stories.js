import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Pagiinon from '.';

const onClickPage = action('click-on-page');
const totalResults = 100;
const page = 3;

storiesOf('Pagination', module)
  .add('default', () => <Pagiinon onClickPage={onClickPage} page={page} totalResults={totalResults} />)
  .add('only with total results', () => <Pagiinon onClickPage={onClickPage} totalResults={totalResults} />)
  .add('with selected page', () => <Pagiinon onClickPage={onClickPage} page={page} totalResults={totalResults} />)
  .add('without any data', () => <Pagiinon onClickPage={onClickPage} />);

  onClickPage={pageNew => this.changePage(pageNew)}
            page={page}
            totalPages={totalPages}
