import styled from 'styled-components';

export const SearchWrap = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
background-color: white;
width: 100%;
`;
export const SearchInput = styled.input`
  height: 45px;
  font-size: 15px;
  float: left;
  padding: 8px;    
  margin-right: 8px;
  outline: none;
  border: none;
  border-bottom: 2px solid lightgray;
`;
export const SearchIcon = styled.img`
  cursor: pointer;
  justify-content: center;
  margin-right: 40px;
  height: 25px;
`;
