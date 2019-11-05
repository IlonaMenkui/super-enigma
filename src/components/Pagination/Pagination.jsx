import React from 'react';

import { PageNumber } from './style';

function Pagination() {
  return (
    <div className="pagination">
      <PageNumber href="#">&laquo;</PageNumber>
      <PageNumber href="#">1</PageNumber>
      <PageNumber className="active" href="#">2</PageNumber>
      <PageNumber href="#">3</PageNumber>
      <PageNumber href="#">4</PageNumber>
      <PageNumber href="#">5</PageNumber>
      <PageNumber href="#">6</PageNumber>
      <PageNumber href="#">&raquo;</PageNumber>
    </div>
  );
}

export default Pagination;
