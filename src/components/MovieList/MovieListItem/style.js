import styled from 'styled-components';

export const MovieWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const PosterWrapper = styled.div`
  width: 170px;
  height: 265px;
`;

export const Label = styled.div`
  font-size: 15px;
  margin-bottom: ${({ marginBottom }) => marginBottom || '0'};
`;

export const TitleLabel = styled.div`
  font-size: 25px;
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
  cursor: pointer;
  width: 170px;
  padding-bottom: 10px;
`;

export const ModalPosterImage = styled.img`
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

export const ChipWrapper = styled.div`
  margin-left: 20px;
`;
