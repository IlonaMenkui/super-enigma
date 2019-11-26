import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SearchContainer from '../SearchContainer';
import MovieListContainer from '../MovieListContainer';

import {
  setPage as setPageAction,
} from '../../actions/movies';
import {
  PAGINATION_FIRST_PAGES as firstPagesValue,
  PAGINATION_LAST_PAGES as lastPagesValue,
  PAGINATION_MIN_TOTAL_PAGES as minTotalResults,
  MAX_PAGINATION_PAGES as maxPagesValue,
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
      this.checkPaginationPages();
    }
  }

  getPaginationPages(totalPages, page, firstPagesCount, lastPagesCount) {
    if (totalPages === 0) {
      return {
        firstPages: [0],
        actualPages: [],
        lastPages: [],
      };
    }

    if (totalPages <= firstPagesCount + lastPagesCount + actualPagesCount) {
      return {
        firstPages: [...Array(totalPages)].map((_, i) => i),
        actualPages: [],
        lastPages: [],
      };
    }

    return {
      firstPages: this.getFirstPages(firstPagesCount),
      actualPages: this.getActualPages(totalPages, page, firstPagesCount, lastPagesCount),
      lastPages: this.getLastPages(lastPagesCount, totalPages),
    };
  }

  getFirstPages(firstPagesCount) {
    return [...Array(firstPagesCount)].map((v, i) => i + 1);
  }

  getLastPages(lastPagesCount, totalPages) {
    return [...Array(lastPagesCount)].map((v, i) => i + totalPages - lastPagesCount + 1);
  }

  getActualPages(totalPages, page, firstPagesCount, lastPagesCount) {
    const firstLastPage = totalPages - lastPagesCount + 1;
    if (page < firstPagesCount) return [];
    if (page > firstLastPage) return [];

    const endOfTheFirstGroup = firstPagesCount + 1;
    const endOfTheLastGroup = totalPages - lastPagesCount - 1;

    const actualPagesStart = Math.max(endOfTheFirstGroup, page - ((actualPagesCount - 1) / 2));
    const actualPagesEnd = Math.max(
      Math.min(endOfTheLastGroup, page + ((actualPagesCount - 1) / 2)),
      endOfTheFirstGroup + firstPagesCount - 1,
    );

    console.log(actualPagesStart, actualPagesEnd, firstLastPage);

    if (page <= firstLastPage && page > firstLastPage - 3) {
      return [...Array(3)].map((_, i) => i + firstLastPage - 3);
    }

    return [...Array(actualPagesEnd - actualPagesStart + 1)].map((_, i) => i + actualPagesStart);
  }

  setPaginationPages(firstPageValue = 3, lastPageValue = 3) {
    const { page, totalPages } = this.props;
    const { firstPages, lastPages } = this.state;

    console.log(this.getPaginationPages(totalPages, page, firstPageValue, lastPageValue));

    // first pages
    if (totalPages === 0) {
      this.setState({ firstPages: [0] });
    } else if (totalPages < minTotalResults) {
      this.setState({ firstPages: [...Array(totalPages)].map((v, i) => i + 1) });
    } else {
      this.setState({ firstPages: [...Array(firstPageValue)].map((v, i) => i + 1) });
    }
    // last pages
    if (totalPages >= minTotalResults) {
      this.setState({
        lastPages:
          [...Array(lastPageValue)].map((v, i) => i + (totalPages - lastPageValue) + 1),
      });
    } else {
      this.setState({ lastPages: [] });
    }
    // actual pages
    if (page === lastPages[0]
      || page === lastPages[0] - 1
      || page === lastPages[0] - 2) {
      // when the current page (and two next) go to the last three
      // or current page = first last page
      this.setState({
        actualPages:
          [lastPages[0] - 3, lastPages[0] - 2, lastPages[0] - 1],
      });
    } else if ((page > firstPagesValue
      && totalPages >= minTotalResults
      && page < totalPages - firstPagesValue
      && page !== firstPages.length + 1)
      || page === lastPages[0] - 3) {
      // display actual pages
      this.setState({
        actualPages:
          [page - 1, page, page + 1],
      });
    } else if (page > firstPagesValue
      && totalPages >= minTotalResults
      && page === firstPages.length + 1) {
      // display the current page if it goes immediately after the first three
      this.setState({
        actualPages:
          [page, page + 1, page + 2],
      });
    } else if ((page === firstPages[firstPages.length - 1]
      && totalPages >= minTotalResults)
      || (page === firstPages.length + 1 && firstPagesValue === 1)) {
      // display actual pages when current page goes immediately before the actual
      this.setState({
        actualPages:
          [page + 1, page + 2, page + 3],
      });
    } else {
      this.setState({ actualPages: [] });
    }
  }

  checkPaginationPages() {
    if (firstPagesValue <= maxPagesValue
      && lastPagesValue <= maxPagesValue) {
      this.setPaginationPages(firstPagesValue, lastPagesValue);
    } else {
      this.setPaginationPages();
    }
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
