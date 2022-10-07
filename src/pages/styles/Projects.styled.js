import styled from 'styled-components'

export const StyledProjects = styled.div`
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${({ theme }) => theme.colors[0]};
        color: ${({ theme }) => theme.colors[1]};
        cursor: default;

        h1 {
            font-size: 6rem;
            margin-bottom: 0;
            text-align: center;
            text-decoration: underline 3px ${({ theme }) => theme.colors[3]};
            text-underline-offset: 1.5rem;
        }

        p {
            color: ${({ theme }) => theme.colors[1]};
            font-weight: 400;
            padding-bottom: 4rem;
            text-align: center;
        }

        a {
            position: relative;
            cursor: pointer;
        }
        
        a > img {
            height: 10rem;
            width: 16rem;
            margin: 1rem;
            border-radius: 1rem;
            background-color: ${({ theme }) => theme.colors[1]};
            cursor: pointer;
        }

        a:hover > img {
            filter: blur(3px);
        }

        .projects-header, .projects-body {
            display: flex;
            flex-direction: column;
            padding: 3rem;
        }

        .project-name {
            display: none;
            position: absolute;
            top: 0;
            left: 0;
            font-size: 1.2rem;
            font-weight: 600;
            text-transform: uppercase;
            color: #000;
            cursor: pointer;
        }

        a:hover > .project-name {
            display: flex;
            height: 10rem;
            width: 16rem;
            margin: 1rem;
            padding: 0;
            align-items: center;
            justify-content: center;
            white-space: pre-line;
        }

        @media only screen and (max-width: 1015px) {
            flex-direction: column;
            height: max-content;

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
                padding-top: 1rem;
            }

            .projects-header {
                padding-bottom: 0;
            }

            .projects-body {
                padding: 0;
        }
        }
`