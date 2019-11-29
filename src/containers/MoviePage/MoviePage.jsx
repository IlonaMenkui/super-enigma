import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SearchContainer from '../SearchContainer';
import MovieListContainer from '../MovieListContainer';
import {
  PAGINATION_FIRST_PAGES as firstPagesCount,
  PAGINATION_LAST_PAGES as lastPagesCount,
  ACTUAL_PAGES_COUNT as actualPagesCount,
} from '../../constants';

import {
  setPage as setPageAction,
} from '../../actions/movies';

import Pagination from '../Pagination';

import { PaginationWrapper, MovieWrapper } from './style';

@connect(
  ({ page, totalPages }) => ({ page, totalPages }),
  {
    setPage: setPageAction,
  },
)
export default class MoviePage extends React.PureComponent {
  handleClick(pageNumber) {
    const { totalPages } = this.props;
    if ((pageNumber < 1 && pageNumber !== 0)
      || pageNumber === 0) {
      this.changePage(1);
    } else if (pageNumber <= totalPages && pageNumber !== 0) {
      this.changePage(pageNumber);
    }
  }

  changePage(page) {
    const { setPage } = this.props;
    setPage({ page });
  }

  render() {
    const { title, type } = this.props;
    const { totalPages, page } = this.props;
    return (
      <div>
        <PaginationWrapper>
          <Pagination
            firstPagesCount={firstPagesCount}
            lastPagesCount={lastPagesCount}
            actualPagesCount={actualPagesCount}
            totalPages={totalPages}
            page={page}
            handleClick={pageNumber => this.handleClick(pageNumber)}
          />
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

MoviePage.defaultProps = {
  page: 1,
  totalPages: 0,
};

MoviePage.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  page: PropTypes.number,
  totalPages: PropTypes.number,
  setPage: PropTypes.func.isRequired,
};
