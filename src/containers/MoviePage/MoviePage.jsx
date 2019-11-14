import React from 'react';
import PropTypes from 'prop-types';

import SearchContainer from '../SearchContainer';
import MovieListContainer from '../MovieListContainer';

import Pagination from '../Pagination';

import { PaginationWrapper, MovieWrapper } from './style';

export default class MoviePage extends React.PureComponent {
  render() {
    const { title, type } = this.props;
    return (
      <div>
        <PaginationWrapper>
          <Pagination />
        </PaginationWrapper>
        <MovieWrapper>
          <SearchContainer />
          <MovieListContainer
            type={type}
            title={title}
          />
        </MovieWrapper>
      </div>
    );
  }
}

MoviePage.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
