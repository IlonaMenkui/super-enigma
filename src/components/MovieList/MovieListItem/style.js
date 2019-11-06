import styled from 'styled-components';

export const MovieWrap = styled.div`
  display: flex;
  align-items: flex-start;
`;
export const Label = styled.div`
  font-size: ${props => props.size || '15px'};
  color: ${props => props.color || 'black'};
  margin-bottom: ${props => props.marginBottom || '0'};
`;

export const TitleLabel = styled.div`
  font-size: 25px;
  color: ${props => props.color || 'black'};
  margin-bottom: ${props => props.marginBottom || '0'};
`;

export const LabelGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-left: 15px;
`;

export const DateLabel = styled.div`
  font-size: 11px;
  color: gray;
  margin-bottom: 20px;
`;

export const Title = styled.b``;

export const PosterImage = styled.img`
  cursor: ${props => (props.cursor === 'pointer' ? 'pointer' : 'default')};
  width: ${props => (props.size === 'small' ? '170px' : '')};
  padding-bottom: 10px;
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
