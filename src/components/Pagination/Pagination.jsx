import React from 'react';
import PropTypes from 'prop-types';

import { PageNumber, PaginationWrap } from './style';

function Pagination({ onClickPage, totalPages: pagesCount, page }) {
  let totalPage = 1;

  if (pagesCount > 499) {
    totalPage = 10;
  } else {
    totalPage = pagesCount;
  }

  const handleClick = pageNumber => {
    if (pageNumber < 1) {
      onClickPage(1);
    } else if (pageNumber > totalPage) {
      onClickPage(totalPage);
    } else {
      onClickPage(pageNumber);
    }
  };

  return (
    <PaginationWrap>
      <PageNumber onClick={() => handleClick(1)}>{'<<'}</PageNumber>
      <PageNumber onClick={() => handleClick(page - 1)}>{'<'}</PageNumber>
      {[...Array(totalPage).keys()]
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
      <PageNumber onClick={() => handleClick(page + 1)}>{'>'}</PageNumber>
      <PageNumber onClick={() => handleClick(totalPage)}>{'>>'}</PageNumber>
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
