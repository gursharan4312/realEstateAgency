import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles, { themes } from "../globalStyles";
import Dropdown from "./Dropdown";
import Footer from "./Footer";
import Navbar from "./Navbar";

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Content = styled.div``;

function Layout({ atHome, children }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeProvider theme={themes[theme]}>
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
        <Footer />
      </LayoutContainer>
    </ThemeProvider>
  );
}

export default Layout;
