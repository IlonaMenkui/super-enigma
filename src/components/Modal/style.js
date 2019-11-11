import styled from 'styled-components';


export const CloseCross = styled.img`
  margin-left: 20px;
  margin-right: 15px;
  cursor: pointer;
  width: 13px;
`;

export const Modal = styled.div`
  display:  ${props => (props.open ? 'flex' : 'none')};
  align-items: flex-start;
  background: white;
  border-radius: 4px;
  padding: 20px 0 20px 20px;
  width: 40%;
`;
