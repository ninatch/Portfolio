import styled from 'styled-components'

export const StyledFooter = styled.div`
        min-height: 3rem;
        margin: 0;
        padding: 0 1rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-content: center;
        align-items: center;
        background-color: ${({ theme }) => theme.colors[3]};
        text-align: center;

    a {
        padding: 1rem 0;
        display: inline-block;
        color: ${({ theme }) => theme.colors[1]};
        cursor: pointer;
    }

    p {
        margin: 0;
        font-size: .8rem;
    }

    img {
        width: 15%;
        cursor: pointer;
    }

    .img-arrow {
        padding: 3rem;
    }

    .socials {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    .socials img {
        padding: 0 .5rem;
        width: 90%;
    }

    @media only screen and (max-width: 1015px) {
    }
`