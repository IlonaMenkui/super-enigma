import { connect } from 'react-redux';
import MoviePage from '../page/MoviePage';

const mapStateToProps = ({ search, moviePage }) => ({
  ...moviePage,
  movies: search.movies.length ? search.movies : moviePage.movies,
});

const mapDispatchToProps = dispatch => ({
  getActionDispatcher: action => () => dispatch(action),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MoviePage);
