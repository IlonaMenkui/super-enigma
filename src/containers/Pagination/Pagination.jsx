import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  setPage as setPageAction,
} from '../../actions/movies';
import {
  PAGINATION_FIRST_PAGES as firstPagesValue,
  PAGINATION_LAST_PAGES as lastPagesValue,
  PAGINATION_MIN_TOTAL_PAGES as minTotalResults,
  MAX_PAGINATION_PAGES as maxPagesValue,
} from '../../constants';

import { PageNumber, PaginationWrapper } from './style';

@connect(
  ({ page, totalPages }) => ({ page, totalPages }),
  {
    setPage: setPageAction,
  },
)
export default class Pagination extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      firstPages: [],
      lastPages: [],
      actualPages: [],
    };
  }

  componentDidUpdate(prevProps) {
    const { totalPages: prevtotalPages } = prevProps;
    const { totalPages } = this.props;
    if (prevtotalPages !== totalPages) {
      this.checkPaginationPages();
    }
  }

  setPaginationPages(firstPageValue = 3, lastPageValue = 3) {
    const { totalPages } = this.props;
    if (totalPages === 0) {
      this.setState({ firstPages: [0] });
    } else if (totalPages < 10) {
      this.setState({ firstPages: [...Array(totalPages)].map((v, i) => i + 1) });
    } else {
      this.setState({ firstPages: [...Array(firstPageValue)].map((v, i) => i + 1) });
    }
    if (totalPages >= minTotalResults) {
      this.setState({
        lastPages:
          [...Array(lastPageValue)].map((v, i) => i + (totalPages - lastPageValue) + 1),
      });
    } else {
      this.setState({ lastPages: [] });
    }
  }

  checkPaginationPages() {
    if (firstPagesValue > maxPagesValue
      && lastPagesValue > maxPagesValue) {
      this.setPaginationPages();
    } else {
      this.setPaginationPages(firstPagesValue, lastPagesValue);
    }
  }

  changePage(page) {
    const { setPage } = this.props;
    setPage({ page });
  }

  render() {
    const { totalPages, page } = this.props;
    const {
      firstPages, actualPages, lastPages,
    } = this.state;

    const handleClick = pageNumber => {
      if ((pageNumber < 1 && pageNumber !== 0)
        || pageNumber === 0) {
        this.changePage(1);
      } else if (pageNumber <= totalPages && pageNumber !== 0) {
        this.changePage(pageNumber);
      }
    };

    return (
      <PaginationWrapper>
        <PageNumber onClick={() => handleClick(1)}>{'<<'}</PageNumber>
        <PageNumber onClick={() => handleClick(page - 1)}>{'<'}</PageNumber>
        {firstPages
          .map(pageNumber => (
            <PageNumber
              onClick={() => handleClick(pageNumber)}
              className={`p${pageNumber}`}
              page={page}
            >
              {pageNumber}
            </PageNumber>
          ))}
        {actualPages.length ? <PageNumber>...</PageNumber> : ''}
        {actualPages
          .map(pageNumber => (
            <PageNumber
              onClick={() => handleClick(pageNumber)}
              className={`p${pageNumber}`}
              page={page}
            >
              {pageNumber}
            </PageNumber>
          ))}
        {lastPages.length ? <PageNumber>...</PageNumber> : ''}
        {lastPages
          .map(pageNumber => (
            <PageNumber
              onClick={() => handleClick(pageNumber)}
              className={`p${pageNumber}`}
              page={page}
            >
              {pageNumber}
            </PageNumber>
          ))}
        <PageNumber onClick={() => handleClick(page + 1)}>{'>'}</PageNumber>
        <PageNumber onClick={() => handleClick(totalPages)}>{'>>'}</PageNumber>
      </PaginationWrapper>
    );
  }
}

Pagination.defaultProps = {
  page: 1,
  totalPages: 0,
};

Pagination.propTypes = {
  page: PropTypes.number,
  totalPages: PropTypes.number,
  setPage: PropTypes.func.isRequired,
};
