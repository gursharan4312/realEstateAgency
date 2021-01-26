import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');       
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family: 'Montserrat', sans-serif;
        transition: 0.3s all;
    }
    html,body{
        overflow-x: hidden;
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
    background: "#f1f1f1",
    backgroundVariant: "#d7d7d7",
    primaryColor: "#AC6C2D",
    headingColor: "#000",
    headingColorInverted: "#fff",
    textColor: "#6c737d",
  },
};
