import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { menuData } from "../data/MenuData";
import { Button } from "./Button";
import { FaBars, FaSun, FaMoon } from "react-icons/fa";

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 1rem 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  background: ${({ atTop, atHome, theme }) =>
    atTop && atHome ? "transparent" : theme.backgroundVariant};
`;

const NavLink = css`
  color: ${({ theme }) => theme.headingColor};
  display: inline-block;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

const Logo = styled(Link)`
  ${NavLink}
  font-style: italic;
`;
const MenuBars = styled(FaBars)`
  display: none;
  color: ${({ theme }) => theme.headingColor};
  height: 40px;
  width: 40px;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-50%, 25%);
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const DarkThemeBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3rem 0.5rem;
  margin-left: 1rem;
  font-size: 1.4rem;
  .sun {
    color: #fff;
  }
`;

const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin: 0 0.3rem;
  input {
    opacity: 0;
    width: 0;
    height: 0;
    &:checked + .slider {
      background-color: ${({ theme }) => theme.background};
    }
    &:focus + .slider {
      box-shadow: 0 0 1px ${({ theme }) => theme.backgroundVariant};
    }
    &:checked + .slider:before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;
  &:before {
    position: absolute;

    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: ${({ theme }) => theme.backgroundVariant};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

function Navbar({ toggleDropdown, setTheme, theme, atHome }) {
  const [atTop, setAtTop] = useState(true);
  useEffect(() => {
    let eventListener = window.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 120) {
        if (atTop) setAtTop(false);
      } else {
        if (!atTop) setAtTop(true);
      }
    });

    return () => window.removeEventListener("scroll", eventListener);
  }, [atTop]);

  return (
    <Nav atTop={atTop} atHome={atHome}>
      <Logo to="/">REST</Logo>
      <MenuBars onClick={toggleDropdown} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button primary="true" to="/contact">
          Contact Us
        </Button>
        <DarkThemeBtn>
          <FaSun className="sun" />
          <ToggleSwitch htmlFor="darkmodetoggler">
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
              id="darkmodetoggler"
            />
            <Slider className="slider"></Slider>
          </ToggleSwitch>
          <FaMoon />
        </DarkThemeBtn>
      </NavBtn>
    </Nav>
  );
}

export default Navbar;
