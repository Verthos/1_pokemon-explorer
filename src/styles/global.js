import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`

:root {
    --blue: #003d80;
    --cyan: #00ffff;
    --text-body: #969CB3;
    --shape: #FFFFFF;
    --green: #04D361;
    --soft-black: #262626;


    // new theme
    --blue-100: #0487D9;
    --blue-50: #63BBF2; 
    --green-100: #3B7302;
    --green-50: #65A603;
    --yellow-100 : #F2CB05;

    //glass variables
    --glass-green: #74efc9;
    --glass-blue: #7bcceb;
    

}

* { 
    margin:0;
    padding:0;
    box-sizing: border-box;
    
}

html {


    @media (max-width: 1080px) {
            font-size: 93.75%; //15px
        }
    @media (max-width: 720px) {
            font-size: 82.5%; //14px
        }
    @media (max-width: 340px) {
            font-size: 82.5%; 
        }
}


body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    width: calc(100vw - (100vw - 100%));
    background-color: #c3dee9;
    -webkit-font-smoothing: antialiased;
}


h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
}

button {
    cursor: pointer;
}

[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
}

`