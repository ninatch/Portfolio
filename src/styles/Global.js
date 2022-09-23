import { createGlobalStyle } from 'styled-components'


export const GlobalStyles = createGlobalStyle`

    * {
        box-sizing: border-box;
        cursor: default;
    }
    
    body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        font-family: 'Garet';
        color: ${({ theme }) => theme.colors[1]};
        background-color: ${({ theme }) => theme.colors[0]};
        overflow-x: hidden;
    }
    
    p {
        margin: 10px;
    }
`