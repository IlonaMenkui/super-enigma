import styled from 'styled-components';

export const Modal = styled.div`
  display:  ${({ open }) => (open ? 'flex' : 'none')};
  align-items: flex-start;
  background: white;
  border-radius: 4px;
  padding: 20px 0 20px 20px;
  width: 40%;
`;

export default Modal;
