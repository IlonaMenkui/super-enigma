import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SearchContainer from '../SearchContainer';
import MovieListContainer from '../MovieListContainer';

import {
  setPage as setPageAction,
} from '../../actions/movies';
import {
  PAGINATION_FIRST_PAGES as firstPagesCount,
  PAGINATION_LAST_PAGES as lastPagesCount,
  ACTUAL_PAGES_COUNT as actualPagesCount,
} from '../../constants';

import Pagination from '../../components/Pagination';

import { PaginationWrapper, MovieWrapper } from './style';

@connect(
  ({ page, totalPages }) => ({ page, totalPages }),
  {
    setPage: setPageAction,
  },
)
export default class MoviePage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      firstPages: [],
      lastPages: [],
      actualPages: [],
    };
  }

  componentDidUpdate(prevProps) {
    const { totalPages: prevtotalPages, page: prevPage } = prevProps;
    const { totalPages, page } = this.props;
    if (prevtotalPages !== totalPages || prevPage !== page) {
      this.setPaginationPages(totalPages, page);
    }
  }

  setPaginationPages(totalPages, page) {
    this.setState({
      firstPages: this.getFirstPages(totalPages),
      actualPages: this.getActualPages(totalPages, page, lastPagesCount),
      lastPages: this.getLastPages(totalPages, lastPagesCount),
    });
  }

  getFirstPages(totalPages) {
    console.log(1);
    if (totalPages <= 0) return [0];

    if (totalPages <= firstPagesCount + lastPagesCount + actualPagesCount) {
      return [...Array(totalPages)].map((_, i) => i + 1);
    }

    return [...Array(firstPagesCount)].map((_, i) => i + 1);
  }

  getLastPages(totalPages) {
    if (totalPages <= 0
      || totalPages <= firstPagesCount + lastPagesCount + actualPagesCount) return [];

    return [...Array(lastPagesCount)].map((_, i) => i + totalPages - lastPagesCount + 1);
  }

  getActualPages(totalPages, page) {
    const firstPageOfTheLastGroup = totalPages - lastPagesCount + 1;
    if (totalPages <= 0 || page < firstPagesCount || page > firstPageOfTheLastGroup
      || totalPages <= firstPagesCount + lastPagesCount + actualPagesCount) return [];

    const endOfTheFirstGroup = firstPagesCount + 1;
    const endOfTheLastGroup = totalPages - lastPagesCount - 1;

    const actualPagesStart = Math.max(endOfTheFirstGroup, page - ((actualPagesCount - 1) / 2));
    const actualPagesEnd = Math.min(endOfTheLastGroup, page + ((actualPagesCount - 1) / 2));


    if (page <= endOfTheFirstGroup) {
      return [...Array(actualPagesCount)].map((_, i) => i + endOfTheFirstGroup);
    }

    if (page >= endOfTheLastGroup) {
      return [...Array(actualPagesCount)].map((_, i) => i + firstPageOfTheLastGroup - actualPagesCount);
    }

    return [...Array(actualPagesEnd - actualPagesStart + 1)].map((_, i) => i + actualPagesStart);
  }

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
    const { firstPages, actualPages, lastPages } = this.state;
    const { totalPages, page } = this.props;
    return (
      <div>
        <PaginationWrapper>
          <Pagination
            firstPages={firstPages}
            actualPages={actualPages}
            lastPages={lastPages}
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
