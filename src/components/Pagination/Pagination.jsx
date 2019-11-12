import React from 'react';
import PropTypes from 'prop-types';

import { PageNumber, PaginationWrap } from './style';

function Pagination({ onClickPage, totalPages: pagesCount, page }) {
  const currentPage = page;
  const lastPage = pagesCount;
  const secondPage = currentPage + 1;
  const thirdPage = currentPage + 2;
  const firstPages = [];
  (function pageCheck() {
    if (secondPage === lastPage && secondPage < 3) {
      firstPages.push(currentPage, secondPage); // когда вторая страница - последняя
    } else if (currentPage === lastPage - 3
      || currentPage === lastPage - 4
      || currentPage === lastPage - 5) {
      firstPages.push(lastPage - 5, lastPage - 4, lastPage - 3);
      // когда актуальная страница (и две рядом) идут до трех последних
    } else if (currentPage === 2 && currentPage === lastPage) {
      firstPages.push(1, currentPage); // когда всего две страницы и актуальная - вторая
    } else if (currentPage !== lastPage
      && pagesCount > 3
      && thirdPage < lastPage) {
      firstPages.push(currentPage, secondPage, thirdPage); // отобразить первые три страницы
    } else if (pagesCount === 0) {
      firstPages.push(0); // когда нет результата поиска или нет страниц
    } else if (pagesCount === 1) {
      firstPages.push(1); // когда всего одна страница
    } else if (currentPage) {
      firstPages.push(1, 2, 3);
      // когда актуальная страница - одна из трех последних (отобразить первые три страницы)
    }
  }());

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
