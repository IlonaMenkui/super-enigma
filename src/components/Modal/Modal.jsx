import React from 'react';
import PropTypes from 'prop-types';
import Modal from './style';
import CloseCross from '../CloseCross';

function SimpleModal({ open, onClose, modalContent }) {
  return (
    <Modal open={open}>
      {modalContent}
      <CloseCross onClick={onClose} />
    </Modal>
  );
}

SimpleModal.propTypes = {
  modalContent: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SimpleModal;
