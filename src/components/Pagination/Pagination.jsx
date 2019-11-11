import React from 'react';
import PropTypes from 'prop-types';

import { PageNumber, PaginationWrap } from './style';

function Pagination({ onClickPage, totalPages: pagesCount, page }) {
  const currentPage = page;
  const lastPage = pagesCount;

  const handleClick = pageNumber => {
    if (pageNumber < 1) {
      onClickPage(1);
    } else {
      onClickPage(pageNumber);
    }
  };

  return (
    <PaginationWrap>
      <PageNumber onClick={() => handleClick(1)}>{'<<'}</PageNumber>
      <PageNumber onClick={() => handleClick(currentPage - 1)}>{'<'}</PageNumber>
      {[currentPage, currentPage + 1, currentPage + 2]
        .map(pageNumber => (
          <PageNumber
            onClick={() => handleClick(pageNumber)}
            className={`p${pageNumber}`}
            page={currentPage}
          >
            {pageNumber}
          </PageNumber>
        ))}

      {pagesCount > 3 ? <PageNumber>...</PageNumber> : ''}
      {pagesCount > 3 ? (
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
