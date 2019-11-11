import styled from 'styled-components';

export const PageNumber = styled.a`
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    transition: background-color .3s;
    &.p${({ page }) => page} {
        background-color: #00bfff;
        color: white;
    }
    &:hover:not(.p${({ page }) => page}) {
        background-color: #ddd;
    }
`;

export const PaginationWrap = styled.div`
`;
