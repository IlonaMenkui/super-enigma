import styled from 'styled-components';

export const Button = styled.button`
  color: black;
  border: none;
  padding: 15px 42px;
  text-align: center;
  font-size: 16px;
  ${({ index, value }) => (index === value
    ? 'border-bottom: 3px solid #00bfff;' : '')}
  text-transform: uppercase;
  background-color: white;
`;

export const ButtonWrapper = styled.div`
    margin-bottom: 10px;
`;

// transition: background 0.4s ease-in-out, height 0.2s linear;
// transition: background-color .3s;
