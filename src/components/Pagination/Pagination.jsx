import React from 'react';
import PropTypes from 'prop-types';

import { PageNumber, PaginationWrapper } from './style';

function Pagination({
  firstPages, actualPages, lastPages, totalPages, page, handleClick,
}) {
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


Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  firstPages: PropTypes.arrayOf(PropTypes.number).isRequired,
  actualPages: PropTypes.arrayOf(PropTypes.number).isRequired,
  lastPages: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Pagination;
