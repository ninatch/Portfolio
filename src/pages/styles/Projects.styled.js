import styled from 'styled-components'

export const StyledProjects = styled.div`
        height: 100vh;
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
            grid-area: p;
            text-align: center;

        }

        .projects-header, .projects-body {
            display: flex;
            flex-direction: column;
            padding: 3rem;
        }

        @media only screen and (max-width: 1015px) {
            flex-direction: column;
            height: max-content;

            h1 {
                font-size: 3rem;
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