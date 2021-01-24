import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
        
    :root{
        /* --primary-bg: #424242;
        --primary-bg-two: #616161;
        --secondary-bg: #cd853f;

        --primary-text: #fff;
        --secondary-text: #000;

        --primary-link-color: #000;
        --secondary-link-color: #fff;
        --link-hover:#cd853f;

        --primary-button-bg: #000;
        --secondary-button-bg: #fff; */


        --primary-bg: #f7f7f7;
        --primary-bg-two: #e1e1e1;
        --secondary-bg: #cd853f;

        --primary-text: #000;
        --secondary-text: #fff;

        --primary-link-color: #000;
        --secondary-link-color: #fff;
        --link-hover:#cd853f;

        --primary-button-bg: #fff;
        --secondary-button-bg: #000;


    }
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family: 'Montserrat', sans-serif;
    }

    html,body{
        overflow-x: hidden;
        background: var(---primary-bg);
    }
        
    a {
    color: var(--primary-link-color);
    text-decoration: none;
    font-weight: 700;
        &:hover {
            color: var(--link-hover);
        }
    }
`;

export default GlobalStyles;
