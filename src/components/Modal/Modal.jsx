import React from 'react';
import PropTypes from 'prop-types';
import {
  MovieWrap, PosterImage,
} from '../MovieList/MovieListItem/movie-list-item';
import { Modal, CloseButton } from './modal';

function SimpleModal({
  open, posterPathUrl, onClose, modalContent,
}) {
  return (
    <Modal open={open}>
      <MovieWrap>
        <PosterImage alt="poster" src={posterPathUrl} />
        {modalContent}
        <CloseButton type="button" onClick={onClose}>✖</CloseButton>
      </MovieWrap>
    </Modal>
  );
}


SimpleModal.propTypes = {
  modalContent: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  posterPathUrl: PropTypes.string.isRequired,
};

export default SimpleModal;
