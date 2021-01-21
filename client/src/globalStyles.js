import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family: 'Montserrat', sans-serif;
    }

    html,body{
        overflow-x: hidden;
    }
`;

export default GlobalStyles;
