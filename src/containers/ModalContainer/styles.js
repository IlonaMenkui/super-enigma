import styled from 'styled-components';

export const WrapBackground = styled.div`
    ${({ open }) => (open ? `
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.6);` : 'none')}
`;

export default WrapBackground;
