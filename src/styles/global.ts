import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding:0;
        outline: 0;
        transition: all 0.3s;
        font-family: 'Space Mono', monospace;
    } 

    body{
        width: 100%;
        height: 100vh;

        #root{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
        }
    }`;
