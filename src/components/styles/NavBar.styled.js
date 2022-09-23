import styled, { css } from 'styled-components'

export const StyledNavBar = styled.div`
        display: flex;
        gap: 3rem;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin: 0;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        background-color: ${({ theme }) => theme.colors[0]};
    
    a {
        display: inline-block;
        margin: 1rem 0;
        position: relative;
        font-size: .8rem;
        font-weight: 500;
        color: ${({ theme }) => theme.colors[1]};
        cursor: pointer;
        text-transform: uppercase
    }
    
    a::after {
        content: '';
        width: 100%;
        position: absolute;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: ${({ theme }) => theme.colors[1]};
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
    }
    
    a:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
    
    .active {
        border-bottom: 2px solid ${({ theme }) => theme.colors[4]};
    }

    @media only screen and (max-width: 800px) {
            background-color: none;
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: column;
            max-height: fit-content;
            gap: 0rem;

        ${({ click }) => click && css`
            width: 30%;
            height: 100vh;
            opacity: .9;
            transition: cubic-bezier(0.165, 0.84, 0.44, 1) 2s;
            background-color: green;
        `}
    
        a {
            display: none;

        ${({ click }) => click && css`
            display: flex;
            margin: .5rem 1.5rem;
            padding: 0;
            background-color: red;
        `}
    }
    }
    
`