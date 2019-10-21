import styled from 'styled-components';

export const MovieWrap = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-left: 15px;
`;
export const Text = styled.div`
  font-size: ${props => props.size || '15px'};
  color: ${props => props.color || 'black'};
  margin-bottom: ${props => props.marginBottom || '0'};
`;

export const Chip = styled.div`
  display: flex;
  width: 35px;
  height: 35px;
  margin-right: 15px;
  margin-left: 10px; 
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
  border-radius: 50px;
`;

export const ChipWrap = styled.div`
  margin-left: 20px;
`;
