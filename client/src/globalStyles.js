import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
        
    :root{
        --primary-bg : #fff;
        --secondary-bg-dark : #000d1a;
        --secondary-bg: #cd853f;
        --primary-text: #000d1a;
        --secondary-text: #fff;
        --primary-link-color: #000;
        --secondary-link-color: #fff;
        --link-hover:#cd853f;
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
