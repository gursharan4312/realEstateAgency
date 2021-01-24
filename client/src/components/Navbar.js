import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { menuData } from "../data/MenuData";
import { Button } from "./Button";
import { FaBars } from "react-icons/fa";

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  background: ${({ atTop }) => (atTop ? "transparent" : "var(--secondary-bg)")};
`;

const NavLink = css`
  color: var(--secondary-text);
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
  color: var(--secondary-text);
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

function Navbar({ toggle }) {
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
    <Nav atTop={atTop}>
      <Logo>REST</Logo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button to="/contact">Contact Us</Button>
      </NavBtn>
    </Nav>
  );
}

export default Navbar;
