import React from 'react';
import PropTypes from 'prop-types';
import { Modal, CloseCross } from './style';
import cross from '../../static/images/close.svg';

function SimpleModal({
  open, onClose, modalContent,
}) {
  return (
    <Modal open={open}>
      {modalContent}
      <CloseCross src={cross} onClick={onClose} />
    </Modal>
  );
}

SimpleModal.propTypes = {
  modalContent: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SimpleModal;
