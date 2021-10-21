import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`

:root {
    --background: #C8D3DE;
    --blue: #003d80;
    --cyan: #00ffff;
    --text-body: #969CB3;
    --shape: #FFFFFF;
    --green: #04D361;
    --soft-black: #262626;

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
            font-size: 87.5%; //14px
        }
    @media (max-width: 340px) {
            font-size: 82.5%; 
        }
}


body {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    width: calc(100vw - (100vw - 100%));
    background-color: var(--shape);
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