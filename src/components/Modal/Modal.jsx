import React from 'react';
import PropTypes from 'prop-types';
import { Modal, CloseButton } from './style';

function SimpleModal({
  open, onClose, modalContent,
}) {
  return (
    <Modal open={open}>
      {modalContent}
      <CloseButton type="button" onClick={onClose}>✖</CloseButton>
    </Modal>
  );
}

SimpleModal.propTypes = {
  modalContent: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SimpleModal;
