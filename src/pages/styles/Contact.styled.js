import styled from 'styled-components'

export const StyledContact = styled.div`
        height: 100vh;
        display: flex;
        flex-direction: row-reverse;
        justify-content: center;
        align-items: center;
        background-color: ${({ theme }) => theme.colors[0]};
        color: ${({ theme }) => theme.colors[1]};

    h1 {
        font-size: 6rem;
        margin: 0 2rem;
        text-decoration: underline 3px ${({ theme }) => theme.colors[3]};
        text-underline-offset: 1.5rem;
        cursor: default;
    }

    form {
        display: grid;
        grid-template-areas: 
        'n'
        'e'
        'm'
        's';
        margin-top: 8rem;
        margin-right: 2rem;
    }
        
    input {
        width: 20rem;
        height: 2rem;
        margin: 1rem;
        font-family: 'Garet';
        text-indent: 4px;
    }

    input::placeholder, textarea::placeholder {
        color: ${({ theme }) => theme.colors[1]};
    }

    input:focus, textarea:focus {
        outline: none !important;
        border-bottom: 1px solid ${({ theme }) => theme.colors[3]};
    }

    .input-name {
        grid-area: n;
    }
    
    .input-email {
        grid-area: e;
    }

    textarea {
        font-family: 'Garet';
        padding: .5rem;
        margin: 1rem;
        text-indent: 0;
        width: auto;
        height: 3rem;
        resize: none;
        grid-area: m;
    }

    input, textarea {
        background: transparent;
        border: none;
        border-bottom: ${({ theme }) => theme.colors[1]} 2px solid;
        color: ${({ theme }) => theme.colors[1]};
    }

    button {
        width: 5rem;
        margin: 2rem;
        font-size: .9rem;
        font-family: 'Garet';
        padding: .6rem;
        border: none;
        border-bottom: 1px solid ${({ theme }) => theme.colors[2]};
        color: ${({ theme }) => theme.colors[2]};
        background: none;
        cursor: pointer;
        margin-left: 15rem;
        grid-area: s;
    }

    @media only screen and (max-width: 1015px) {
        flex-direction: column;

        h1 {
            font-size: 3rem;
        }

        form {
            margin: 0;
            padding: 4rem 0 0 0;
            grid-template-areas: 
            'n'
            'e'
            'm'
            's';
        }

        input {
            max-width: 500px;
            margin: .5rem;
        }

        textarea {
            margin: .5rem;
        }

        button {
            margin: auto auto 1rem auto;
        }
    }
`