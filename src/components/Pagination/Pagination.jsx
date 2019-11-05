import React from 'react';
import PropTypes from 'prop-types';

import { PAGE_COUNT } from '../../constants';

import { PageNumber, PaginationWrap } from './style';

function Pagination({ onClickPage, totalResults }) {
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
      {[...Array(totalPages).keys()]
        .map(index => index + 1)
        .map(pageNumber => (
          <PageNumber
            onClick={() => handleClick(pageNumber)}
          >
            {pageNumber}
          </PageNumber>
        ))}
    </PaginationWrap>
  );
}

Pagination.defaultProps = {
  totalResults: 0,
};

Pagination.propTypes = {
  totalResults: PropTypes.number,
  onClickPage: PropTypes.func.isRequired,
};

export default Pagination;
