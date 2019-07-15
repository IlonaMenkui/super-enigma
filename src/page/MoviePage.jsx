import React from 'react';
import PropTypes from 'prop-types';

import { PAGE_COUNT } from '../constants/constants';
import Search from '../containers/Search';
import MovieList from '../components/MovieList/MovieList';

import { getMovies } from '../api/api';
import { FlatPagination } from '../components/FlatPagination/FlatPagination';

export default class MoviePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      page: 1,
      totalResults: 0,
      showCircular: true,
    };
  }

  componentDidMount() {
    const { page } = this.state;
    this.loadMovies(page);
  }

  componentDidUpdate(prevProps) {
    const { title: prevTitle } = prevProps;
    const { title } = this.props;
    if (prevTitle !== title) {
      this.loadMovies(1);
    }
  }

  changePage(offset) {
    const page = offset / PAGE_COUNT + 1;
    this.loadMovies(page);
  }

  loadMovies(page) {
    const { type } = this.props;
    return getMovies(type, page)
      .then(({ movies, totalResults }) => {
        this.setState({ movies, totalResults, page });
      })
      .then(() => {
        this.setState({ showCircular: false });
      });
  }

  render() {
    const { title } = this.props;
    const {
      movies, page, totalResults, showCircular,
    } = this.state;
    return (
      <div>
        <FlatPagination
          onClickPage={(e, offset) => this.changePage(offset)}
          page={page}
          totalResults={totalResults}
        />
        <Search />
        <MovieList movies={movies} pageTitle={title} showCircular={showCircular} />
      </div>
    );
  }
}

MoviePage.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
