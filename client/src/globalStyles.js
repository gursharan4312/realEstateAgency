import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');       
    :root{
        --primary-bg: #e1e1e1;
        --primary-bg-two: #cfcfcf;
        --secondary-bg: #cd853f;

        --primary-text: #000;
        --primary-text-two:#6c737d;
        --secondary-text: #fff;

        --primary-link-color: #000;
        --secondary-link-color: #fff;
        --link-hover:#cd853f;

        --primary-button-bg: #fff;
        --secondary-button-bg: #000;
    }
    html[data-theme='dark'] {
        --primary-bg: #323f4b;
        --primary-bg-two: #616161;
        --secondary-bg: #cd853f;

        --primary-text: #fff;
        --primary-text-two:#6c737d;
        --secondary-text: #000;

        --primary-link-color: #000;
        --secondary-link-color: #fff;
        --link-hover:#cd853f;

        --primary-button-bg: #000;
        --secondary-button-bg: #fff;
    }
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family: 'Montserrat', sans-serif;
        transition: 0.3s all;
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

export const themes = {
  dark: {
    background: "#121212",
    backgroundVariant: "#272727",
    primaryColor: "#cd853f",
    headingColor: "#fff",
    headingColorInverted: "#000",
    textColor: "#6c737d",
  },
  light: {
    background: "#e1e1e1",
    backgroundVariant: "#fff",
    primaryColor: "#cd853f",
    headingColor: "#000",
    headingColorInverted: "#fff",
    textColor: "#6c737d",
  },
};
