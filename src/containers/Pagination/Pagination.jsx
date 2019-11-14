import React from 'react';
import PropTypes from 'prop-types';

import { PageNumber, PaginationWrapper } from './style';

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
    if (currentPage === lastPage - 3
      || currentPage === lastPage - 4) {
      actualPages.push(lastPage - 5, lastPage - 4, lastPage - 3);
      // when the current page (and two next) go to the last three
    } else if ((currentPage > 3
      && totalPages > 9
      && currentPage < totalPages - 3
      && currentPage !== firstPages.length + 1)
      || currentPage === lastPage - 5) { // display actual pages
      actualPages.push(currentPage - 1, currentPage, currentPage + 1);
    } else if (currentPage > 3
      && totalPages > 9
      && currentPage < totalPages - 3
      && currentPage === firstPages.length + 1) {
      // display the current page if it goes immediately after the first three
      actualPages.push(currentPage, currentPage + 1, currentPage + 2);
    } else if (currentPage === 3 && totalPages > 9) {
      actualPages.push(currentPage + 1, currentPage + 2, currentPage + 3);
    } else if (currentPage === lastPage - 2 && totalPages > 3) {
      actualPages.push(currentPage - 3, currentPage - 2, currentPage - 1);
    }
    if (totalPages === 0) { // when there is no search result or no pages
      firstPages.push(0);
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
    <PaginationWrapper>
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
      {actualPages.length ? <PageNumber>...</PageNumber> : ''}
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
      {totalPages > 9 ? <PageNumber>...</PageNumber> : ''}
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
    </PaginationWrapper>
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
