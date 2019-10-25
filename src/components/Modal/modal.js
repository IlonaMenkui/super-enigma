import styled from 'styled-components';

export const CloseButton = styled.button`
  margin-left: 20px;
  margin-right: 15px;
  margin-left: 10px; 
  background: none;
  border: none;
  cursor: pointer;
  color: gray;
  :hover {
      color: black;
  }      
`;

export const Modal = styled.div`
  display:  ${props => props.open || 'none'};
  position: fixed;
  background: white;
  border: 1px solid black;
  border-radius: 4px;
  padding: 20px 0 20px 20px;
  width: 40%;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
`;
