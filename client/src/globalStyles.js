import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');       
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family: 'Montserrat', sans-serif;
        transition: color 0.3s, background 0.3s; 
    }
    html,body{
        overflow-x: hidden;
        background: ${({ theme }) => theme.background};
        /* color: ${({ theme }) => theme.primaryText}; */
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
    primaryText: "#fff",
    secondaryText: "#6c737d",
  },
  light: {
    background: "#f1f1f1",
    backgroundVariant: "#d7d7d7",
    primaryColor: "#AC6C2D",
    headingColor: "#000",
    headingColorInverted: "#fff",
    textColor: "#6c737d",
    primaryText: "#000",
    secondaryText: "#6c737d",
  },
};
