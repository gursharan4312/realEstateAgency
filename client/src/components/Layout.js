import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles, { themes } from "../globalStyles";
import Helmet from "react-helmet";
import Dropdown from "./Dropdown";
import Footer from "./Footer";
import Navbar from "./Navbar";

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.primaryText};
`;
const Content = styled.div``;

function Layout({ atHome, children, hideFooter }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeProvider theme={themes[theme]}>
      <Helmet>
        <style type="text/css">{`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');  
    `}</style>
      </Helmet>
      <GlobalStyles />
      <LayoutContainer>
        <Navbar
          toggleDropdown={toggleDropdown}
          setTheme={setTheme}
          theme={theme}
          atHome={atHome}
        />
        <Dropdown isOpen={isDropdownOpen} toggle={toggleDropdown} />
        <Content>{children}</Content>
        {!hideFooter && <Footer />}
      </LayoutContainer>
    </ThemeProvider>
  );
}

export default Layout;
