import { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles, { themes } from "../globalStyles";
import Dropdown from "./Dropdown";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      <Navbar
        toggleDropdown={toggleDropdown}
        setTheme={setTheme}
        theme={theme}
      />
      <Dropdown isOpen={isDropdownOpen} toggle={toggleDropdown} />
      {children}
      <Footer />
    </ThemeProvider>
  );
}

export default Layout;
