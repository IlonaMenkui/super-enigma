import React from 'react';
import PropTypes from 'prop-types';

import { PageNumber, PaginationWrap } from './style';

function Pagination({ onClickPage, totalPages: pagesCount, page }) {
  const currentPage = page;
  const lastPage = pagesCount;
  const secondPage = currentPage + 1;
  const thirdPage = currentPage + 2;
  const firstPages = [];
  if (secondPage === lastPage) {
    firstPages.push(currentPage, secondPage); // когда вторая страница - последняя
  } else if (currentPage !== 1 && currentPage === lastPage) {
    firstPages.push(1, currentPage); // когда всего две страницы и актуальная - вторая
  } else if (currentPage !== lastPage && thirdPage !== lastPage && pagesCount > 3) {
    firstPages.push(currentPage, secondPage, thirdPage);
  } else if (pagesCount === 0) {
    firstPages.push(0);
  }

  const handleClick = pageNumber => {
    if (pageNumber < 1 && pageNumber !== 0) {
      onClickPage(1);
    } else if (pageNumber <= pagesCount && pageNumber !== 0) {
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
