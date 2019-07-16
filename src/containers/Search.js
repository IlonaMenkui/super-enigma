import { connect } from 'react-redux';
import { Search } from '../components/Search/Search';

const mapStateToProps = state => ({
  ...state.search,
});

const mapDispatchToProps = dispatch => ({
  getActionDispatcher: action => () => dispatch(action),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
