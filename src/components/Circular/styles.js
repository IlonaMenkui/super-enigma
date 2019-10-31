import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    stroke-dashoffset: 537;
  }
  to {
    stroke-dashoffset: 0;
  }
`;

export const Wrap = styled.div`
    height: 800px;
    display: flex;
    justify-content: center;
`;

export const Svg = styled.svg`
    margin-top: 150px;
    width: 200px;
    height: 200px;
`;

export const Circle = styled.circle`
    cx: 95;
    cy: 95;
    r: 85;
    stroke: #4dc3ff;
    fill: transparent;
    stroke-width: 15;
    stroke-dasharray: 534;
    animation: ${rotate} 1s;
    animation-iteration-count: infinite;
`;
