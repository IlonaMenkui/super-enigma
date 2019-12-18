import React from 'react';
import PropTypes from 'prop-types';

import { PaginationWrapper, PageNumber } from './style';

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
    const { totalPages: prevtotalPages, page: prevPage } = prevProps;
    const { totalPages, page } = this.props;
    if (prevtotalPages !== totalPages || prevPage !== page) {
      this.setPaginationPages(totalPages, page);
    }
  }

  setPaginationPages(totalPages, page) {
    this.setState({
      firstPages: this.getFirstPages(totalPages),
      actualPages: this.getActualPages(totalPages, page),
      lastPages: this.getLastPages(totalPages),
    });
  }

  getFirstPages(totalPages) {
    const { firstPagesCount, lastPagesCount, actualPagesCount } = this.props;
    if (totalPages <= 0) return [0];

    if (totalPages <= firstPagesCount + lastPagesCount + actualPagesCount) {
      return [...Array(totalPages)].map((_, i) => i + 1);
    }

    return [...Array(firstPagesCount)].map((_, i) => i + 1);
  }

  getLastPages(totalPages) {
    const { firstPagesCount, lastPagesCount, actualPagesCount } = this.props;
    if (totalPages <= 0
      || totalPages <= firstPagesCount + lastPagesCount + actualPagesCount) return [];

    return [...Array(lastPagesCount)].map((_, i) => i + totalPages - lastPagesCount + 1);
  }

  getActualPages(totalPages, page) {
    const { firstPagesCount, lastPagesCount, actualPagesCount } = this.props;
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

  render() {
    const { firstPages, actualPages, lastPages } = this.state;
    const { totalPages, page, handleClick } = this.props;
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
  firstPagesCount: 3,
  lastPagesCount: 3,
  actualPagesCount: 3,
};


Pagination.propTypes = {
  firstPagesCount: PropTypes.number,
  lastPagesCount: PropTypes.number,
  actualPagesCount: PropTypes.number,
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};
