import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { Paper } from '@material-ui/core';

import { PAGE_COUNT } from '../../constants';
import SearchContainer from '../SearchContainer';
import MovieListContainer from '../MovieListContainer';
import {
  setPage as setPageAction,
} from '../../actions/movies';
import Pagination from '../../components/Pagination';

import { PaginationWrap } from './style';

@connect(
  state => ({
    ...state,
  }),
  {
    setPage: setPageAction,
  },
)
export default class MoviePage extends React.PureComponent {
  changePage(offset) {
    const { setPage } = this.props;
    setPage({ page: (offset / PAGE_COUNT + 1) });
  }

  changeNewPage(page) {
    const { setPage } = this.props;
    setPage({ page });
  }

  render() {
    const {
      title, totalResults, isLoading, type, page,
    } = this.props;
    return (
      <div>
        <PaginationWrap>
          <Pagination
            onClickPage={(e, pageNew) => this.changeNewPage(pageNew)}
            page={page}
            totalResults={totalResults}
          />
        </PaginationWrap>
        <Paper>
          <SearchContainer title={title} />
          <MovieListContainer
            type={type}
            title={title}
            isLoading={isLoading}
          />
        </Paper>
      </div>
    );
  }
}

MoviePage.propTypes = {
  page: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  totalResults: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  setPage: PropTypes.func.isRequired,
};
