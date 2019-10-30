import styled from 'styled-components';

export const ProgressWrap = styled.div`
    height: 800px;
    display: flex;
    justify-content: center;
`;

export const ProgressBar = styled.div`
    position: relative;
    height: 20px;
    width: 350px;
    border-radius: 50px;
    border: 1px solid #404040;
    margin-top: 150px;
`;

export const Filler = styled.div`
    width: ${props => `${props.width}%` || '100%'};
    background: #80d4ff;
    height: 100%;
    border-radius: inherit;
`;
