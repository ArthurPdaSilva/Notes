import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    
    :root{
        --corHeader: rgb(15, 15, 17);
        --corPrincipal: #2B303A;
        --corSecundaria: #cfd3d8;
        --corTerciaria: #0C7C59;
        --corQuaternaria: #D64933;
        --corQuinquenaria: #F18F01;
        --corPadrao: black;
        --corBranca: white;
        --fontFamily: 'Roboto', sans-serif;
        --fontSize: 16px;
        --border: 1px solid rgb(117, 117, 117);
        --borderRadius: 10px;
        --shadow: 2px 2px 3px rgba(0, 0, 0, 0.657);
        --padding: 10px;
        --gaps: 10px;
        --margin: 10px;
    }

    /* All */
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *:focus{
        outline: none;
    }

    svg{
        cursor: pointer;
    }

    a{
        color: var(--corBranca);
        text-decoration: none;
    }

    a, button{
        cursor: pointer;
    }

    button{
        border: none;
    }

    ul{
        list-style: none;
    }

    body{
        font-size: var(--fontSize);
        background-color: var(--corPrincipal);
        font-family: var(--fontFamily);
    }

    html, body, #root{
        height: 100%;
    }

`;