import React from 'react';
import PropTypes from 'prop-types';

import { PageNumber, PaginationWrap } from './style';

function Pagination({ onClickPage, totalPages, page }) {
  const currentPage = page;
  const lastPage = totalPages;
  const firstPages = [];
  const actualPages = [];
  (function pageCheck() {
    if (totalPages < 10) {
      for (let i = 1; i <= totalPages; i++) {
        firstPages.push(i);
      }
    } else {
      firstPages.push(1, 2, 3);
    }
    if (currentPage > 3 && totalPages > 9) {
      actualPages.push(currentPage, currentPage + 1, currentPage + 2);
    }
  }());

  const handleClick = pageNumber => {
    if (pageNumber < 1 && pageNumber !== 0) {
      onClickPage(1);
    } else if (pageNumber <= totalPages && pageNumber !== 0) {
      onClickPage(pageNumber);
    }
  };

  return (
    <PaginationWrap>
      <PageNumber onClick={() => handleClick(1)}>{'<<'}</PageNumber>
      <PageNumber onClick={() => handleClick(currentPage - 1)}>{'<'}</PageNumber>
      {firstPages
        .map(pageNumber => (
          <PageNumber
            onClick={() => handleClick(pageNumber)}
            className={`p${pageNumber}`}
            page={currentPage}
          >
            {pageNumber}
          </PageNumber>
        ))}
      {actualPages.length > 0 ? <PageNumber>...</PageNumber> : ''}
      {actualPages
        .map(pageNumber => (
          <PageNumber
            onClick={() => handleClick(pageNumber)}
            className={`p${pageNumber}`}
            page={currentPage}
          >
            {pageNumber}
          </PageNumber>
        ))}
      {totalPages > 3 ? <PageNumber>...</PageNumber> : ''}
      {totalPages > 9 ? (
        [lastPage - 2, lastPage - 1, lastPage]
          .map(pageNumber => (
            <PageNumber
              onClick={() => handleClick(pageNumber)}
              className={`p${pageNumber}`}
              page={currentPage}
            >
              {pageNumber}
            </PageNumber>
          ))
      ) : ''}
      <PageNumber onClick={() => handleClick(currentPage + 1)}>{'>'}</PageNumber>
      <PageNumber onClick={() => handleClick(lastPage)}>{'>>'}</PageNumber>
    </PaginationWrap>
  );
}

Pagination.defaultProps = {
  page: 1,
  totalPages: 0,
};

Pagination.propTypes = {
  page: PropTypes.number,
  totalPages: PropTypes.number,
  onClickPage: PropTypes.func.isRequired,
};

export default Pagination;
