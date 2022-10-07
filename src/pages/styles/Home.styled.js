import styled, { css } from 'styled-components'
import BlackBG from '../../extras/images/BlackBG.png'

export const StyledHome = styled.div`
        position: relative;
        width: 100%;
        min-height: 100vh;
        cursor: default;
        overflow: hidden;

    h1 {
        position: fixed;
        width: max-content;
        font-family: 'Bebas Neue';
        font-size: 8rem;
        font-weight: 100;
        color: ${({ theme }) => theme.colors[2]};
        top: 15%;
        right: 50%;
        margin: 0;
        text-transform: uppercase;
        line-height: 5.6rem;
        z-index: -1;
        white-space: pre-line;
        overflow: hidden;
    }

    h1::after {
        content: '';
        background-color: red;
        height: 3px;
        width: 50%;
        padding: 0;
        margin: 0;
        position: fixed;
        z-index: -1;
        top: 50%;
        overflow: hidden;
    }
    
    .bg {
        position: relative;
        width: 100%;
        height: 100vh;
        background-image: url(${BlackBG});
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-color: ${({ theme }) => theme.colors[0]};
        z-index: -2;
    }

    @keyframes slide_left {   
        0% {
            left: 100%;
            opacity: 0.5;
        }

        100% {
            left: 30%;
            z-index: -1;
            opacity: 1;
        }
    }

    @keyframes slide_left_pseudo {
        0% {
            left: 100%;
        }

        100% {
            left: 50%;
        }
    }

    @keyframes slide_left_mediumScr {   
        0% {
            left: 100%;
            opacity: 0.5;
        }

        100% {
            left: 10%;
            z-index: -1;
            opacity: 1;
        }
    }
    
    @keyframes slide_left_pseudo_mediumScr {
        0% {
            left: 100%;
        }

        100% {
            left: 50%;
        }
    }

    @keyframes slide_left_pseudo_smallScr {
        0% {
            left: 100%;
        }

        100% {
            left: 80%;
        }
    }

    
    h1::after, .slide-left {
        animation-name: slide_left;
        animation-duration: 3s;
        animation-timing-function: ease;
        animation-iteration-count: 1;
        animation-direction: normal;
        animation-delay: 0;
        animation-play-state: running;
        animation-fill-mode: forwards;
    }


    h1::after {
        animation-name: slide_left_pseudo;
        animation-duration: 5s;
    }


    @media only screen and (max-width: 850px) {

        h1::after, .slide-left {
            animation-name: slide_left_mediumScr;
        }

        h1::after {
            animation-name: slide_left_pseudo_mediumScr;
        }
        
        /* h1 {
            right: 30%
        }

        h1::after {
            left: 80%
        } */
    }

    @media only screen and (max-width: 410px) {

        h1::after {
            animation-name: slide_left_pseudo_smallScr;
        }
    }
`