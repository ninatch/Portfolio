import styled from 'styled-components'
import VScode from '../../extras/images/VScode.png'
import VScodeSmall from '../../extras/images/VScode-SmallScreen.png'

export const StyledSkills = styled.div`
        min-height: 100vh;
        margin: 0;
        padding: 1rem;
        display: grid;
        grid-template-areas:
            'h1 h1 h1'
            'b-1 p b-2';
        grid-template-columns: 49.5% 1% 49.5%;
        background-image: url(${VScode});
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        background-color: ${({ theme }) => theme.colors[0]};
        color: ${({ theme }) => theme.colors[1]};
        cursor: default;

    p {
        border-right: 3px solid ${({ theme }) => theme.colors[1]};
        height: auto;
        width: 3px;
        grid-area: p
    }

    h1 {
        text-decoration: underline 3px ${({ theme }) => theme.colors[3]};
        text-underline-offset: 1.5rem;
        text-align: center;
        grid-area: h1;
        font-size: 6rem;
        margin: 0;
        padding: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    h2 {
        text-align: center;
        font-size: 1.5rem;
        margin: 2rem;
        grid-area: h2;
    }
    
    ul {
        list-style-type: none;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        margin: 0;
        padding: 0;
    }

    li {
        font-weight: 400;
        margin: 1rem;
        text-shadow: ${({ theme }) => theme.colors[0]} 0px 0px 2px;
    }

    .programming-languages {
        grid-area: b-1
    }

    .languages {
        grid-area: b-2
    }

    @media only screen and (max-width: 1015px) {
        grid-template-areas: 
            'h1'
            'b-1'
            'p'
            'b-2';
        grid-template-columns: 1fr;
        background-image: url(${VScodeSmall});

        h1 {
            font-size: 3rem;
            text-decoration: none;
            border-bottom: 3px ${({ theme }) => theme.colors[3]} solid;
            margin: 0;
            padding: 0;
            justify-self: center;
            align-self: center;
        }

        p {
            border-right: none;
            border-bottom: 4px solid ${({ theme }) => theme.colors[1]};
            width: auto;
            height: 4px;
        }
    }
`