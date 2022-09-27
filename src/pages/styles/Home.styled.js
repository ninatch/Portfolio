import styled from 'styled-components'
import BlackBG from '../../extras/images/BlackBG.png'

export const StyledHome = styled.div`
        position: relative;
        width: 100%;
        height: 100vh;
        cursor: default;
        overflow: hidden;

    h1 {
        position: fixed;
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
        width: 100rem;
        position: fixed;
        z-index: -1;
        top: 50%;
        left: 50%;
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

    @media only screen and (max-width: 800px) {
        h1 {
            right: 40%
        }

        h1::after {
            right: 20%
        }
    }
`