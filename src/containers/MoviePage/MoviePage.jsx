import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import SearchContainer from '../SearchContainer';
import MovieListContainer from '../MovieListContainer';
import {
  setPage as setPageAction,
} from '../../actions/movies';
import Pagination from '../../components/Pagination';

import { PaginationWrapper, MovieWrapper } from './style';

@connect(
  ({ page, totalPages, isLoading }) => ({ page, totalPages, isLoading }),
  {
    setPage: setPageAction,
  },
)
export default class MoviePage extends React.PureComponent {
  changePage(page) {
    const { setPage } = this.props;
    setPage({ page });
  }

  render() {
    const {
      title, isLoading, type, page, totalPages,
    } = this.props;
    return (
      <div>
        <PaginationWrapper>
          <Pagination
            onClickPage={() => this.changePage()}
            page={page}
            totalPages={totalPages}
          />
        </PaginationWrapper>
        <MovieWrapper>
          <SearchContainer title={title} />
          <MovieListContainer
            type={type}
            title={title}
            isLoading={isLoading}
          />
        </MovieWrapper>
      </div>
    );
  }
}

MoviePage.propTypes = {
  page: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  totalPages: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  setPage: PropTypes.func.isRequired,
};
