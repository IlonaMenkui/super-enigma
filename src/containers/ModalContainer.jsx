import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SimpleModal from '../components/Modal/Modal';

export default class ModalContainer extends React.Component {
  render() {
    const { open } = this.props;
    const WrapBackground = styled.div`
      ${open ? `
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-color: rgba(0,0,0,0.6);` : ''}
      `;
    const {
      genres, title, overview, posterPathUrl, voteAverage, releaseDate, popularity,
      originalLanguage, voteCount, originalTitle, onClose, modalContent,
    } = this.props;
    return (
      <WrapBackground onClick={onClose}>
        <SimpleModal
          modalContent={modalContent}
          open={open}
          onClick={this.openModal}
          onClose={onClose}
          popularity={popularity}
          originalLanguage={originalLanguage}
          voteCount={voteCount}
          originalTitle={originalTitle}
          genres={genres}
          title={title}
          overview={overview}
          posterPathUrl={posterPathUrl}
          voteAverage={voteAverage}
          releaseDate={releaseDate}
        />
      </WrapBackground>
    );
  }
}

ModalContainer.defaultProps = {
  modalContent: <div />,
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
  modalContent: PropTypes.element,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  overview: PropTypes.string,
  posterPathUrl: PropTypes.string.isRequired,
  voteAverage: PropTypes.number,
  releaseDate: PropTypes.string.isRequired,
  popularity: PropTypes.number,
  originalLanguage: PropTypes.string,
  voteCount: PropTypes.number,
  originalTitle: PropTypes.string,
};
