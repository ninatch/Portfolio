import styled, { css } from "styled-components";

export const StyledMenu = styled.img`
        display: none;

        @media only screen and (max-width: 800px) {

        display: block;
        margin: 1.5rem;
        cursor: pointer;

        ${({ click }) => click && css`
            /* background-color: red; */
        `}
        }
`