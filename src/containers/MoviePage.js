import { connect } from 'react-redux';
import MoviePage from '../page/MoviePage';

const mapStateToProps = state => ({
  ...state.payload,
});

const mapDispatchToProps = dispatch => ({
  getActionDispatcher: action => () => dispatch(action),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MoviePage);
