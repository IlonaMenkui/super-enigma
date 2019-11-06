import React from 'react';
import PropTypes from 'prop-types';

import { PAGE_COUNT } from '../../constants';

import { PageNumber, PaginationWrap } from './style';

function Pagination({ onClickPage, totalResults, page }) {
  let totalPages = 1;

  if (totalResults > 1000) {
    totalPages = 10;
  } else if (totalResults / PAGE_COUNT < 50) {
    totalPages = Math.floor(totalResults / PAGE_COUNT + 1);
  }

  const handleClick = pageNumber => {
    onClickPage(1, pageNumber);
  };

  return (
    <PaginationWrap>
      <PageNumber onClick={() => handleClick(1)}>{'<<'}</PageNumber>
      {[...Array(totalPages).keys()]
        .map(index => index + 1)
        .map(pageNumber => (
          <PageNumber
            onClick={() => handleClick(pageNumber)}
            className={`p${pageNumber}`}
            page={page}
          >
            {pageNumber}
          </PageNumber>
        ))}
      <PageNumber onClick={() => handleClick(totalPages)}>{'>>'}</PageNumber>
    </PaginationWrap>
  );
}

Pagination.defaultProps = {
  page: 1,
  totalResults: 0,
};

Pagination.propTypes = {
  page: PropTypes.number,
  totalResults: PropTypes.number,
  onClickPage: PropTypes.func.isRequired,
};

export default Pagination;
