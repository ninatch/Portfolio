import styled from 'styled-components'

export const StyledAbout = styled.div`
        background-color: ${({ theme }) => theme.colors[2]};
        color: ${({ theme }) => theme.colors[0]};
        display: grid;
        grid-template-rows: repeat(3, minmax(100vh, max-content));
        grid-template-columns: 100vw;
        padding: 2rem auto;
        
    .introduction, .education, .work {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .introduction {
        align-items: flex-end;
        padding: 5rem 15rem;
        background-color: ${({ theme }) => theme.colors[1]};
    }

    .intro-body {
        display: flex;
        flex-direction: column;
        text-align: right;
    }

    .intro-body h3::after {
            content: '';
            width: 167%;
            height: 3px;
            background: red;
            position: absolute;
            top: 102%;
            left: 0;
        }

    img {
        width: 40%;
    }

    h1, h2, h3, h4 {
        margin: 0;
        padding: 0;
    }

    h1 {
        font-size: 6rem;
        width: min-content;
    }
    
    h4 {
        margin-bottom: .6rem;
    }

    a {
        color: ${({ theme }) => theme.colors[3]};
        text-decoration: none;
        cursor: pointer;
    }

    .intro-body h1 {
        width: auto;
    }

    .education h1 {
        text-align: right;
        padding-right: 1.5rem;
    }
    
    .education-body {
        padding-left: 1.5rem;
        border-left: 3px ${({ theme }) => theme.colors[3]} solid;
    }

    .work h1 {
        padding-left: 1.5rem;
    }

    .work-body {
        padding-right: 1.5rem;
        border-right: 3px ${({ theme }) => theme.colors[3]} solid;
        text-align: right;
    }

    @media only screen and (max-width: 1015px) {
        .introduction, .education, .work {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    h1, h2, h3, h4 {
        text-align: center;
        margin: 0;
        padding: 0;
    }

    h1 {
        font-size: 3rem;
    }

    .intro-body h3::after {
        content: none;
    }

    .education, .work {
        margin: 0;
        padding: 0;
        text-align: center;
    }

    .education-body, .work-body {
        border: none;
        padding: 0;
        margin: 0;
    }

    .introduction h1, .education h1, .work h1 {
        text-align: center;
        padding: 0;
        margin: 0 0 1.5rem 0;
        border-bottom: 3px ${({ theme }) => theme.colors[3]} solid;
    }

    .work {
        flex-direction: column-reverse;
    }
    }
    
    @media only screen and (max-width: 800px) {

        h1 {
            margin: 0;
            padding: 0;
            justify-self: center;
            align-self: center;
        }

        img {
            display: none;
        }

        .introduction {
            align-items: center;
            padding: 5rem;
        }
    }
`