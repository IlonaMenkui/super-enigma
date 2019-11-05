import styled from 'styled-components';

export const PageNumber = styled.a`
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    transition: background-color .3s;
    &.p${props => props.page} {
        background-color: dodgerblue;
        color: white;
    }
    &:hover:not(.active) {
        background-color: #ddd;
    }
`;

export const PaginationWrap = styled.div`
`;
