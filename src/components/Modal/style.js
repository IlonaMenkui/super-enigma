import styled from 'styled-components';

export const CloseButton = styled.button`
  margin-left: 20px;
  margin-right: 15px;
  background: none;
  border: none;
  cursor: pointer;
  color: gray;
  :hover {
      color: black;
  }      
`;

export const Modal = styled.div`
  display:  ${props => (props.open ? 'flex' : 'none')};
  align-items: flex-start;
  background: white;
  border-radius: 4px;
  padding: 20px 0 20px 20px;
  width: 40%;
`;
