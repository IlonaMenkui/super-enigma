import React from 'react';
import PropTypes from 'prop-types';

import SimpleModal from '../components/Modal/Modal.jsx';

export default class ModalContainer extends React.Component {
    state = { open: false };

    openModal = () => {
      this.setState({ open: true });
    }

    closeModal = () => {
      this.setState({ open: false });
    }

    render() {
      const { open } = this.state;
      const {
        genres, title, overview, posterPath, voteAverage, releaseDate, popularity,
        originalLanguage, voteCount, originalTitle,
      } = this.props;
      return (
        <SimpleModal
          open={open}
          onClick={this.openModal}
          handleClose={this.closeModal}
          popularity={popularity}
          originalLanguage={originalLanguage}
          voteCount={voteCount}
          originalTitle={originalTitle}
          genres={genres}
          title={title}
          overview={overview}
          posterPath={posterPath}
          voteAverage={voteAverage}
          releaseDate={releaseDate}
        />
      );
    }
}

ModalContainer.defaultProps = {
  genres: [],
  overview: 'No overview',
  voteAverage: 0,
  popularity: 0,
  originalTitle: 'No original title',
  originalLanguage: 'No original language',
  voteCount: 0,
  title: 'No title',
};

ModalContainer.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  overview: PropTypes.string,
  posterPath: PropTypes.string.isRequired,
  voteAverage: PropTypes.number,
  releaseDate: PropTypes.string.isRequired,
  popularity: PropTypes.number,
  originalLanguage: PropTypes.string,
  voteCount: PropTypes.number,
  originalTitle: PropTypes.string,
};
