import React from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { menuData } from "../data/MenuData";
import { Button } from "./Button";

const DropsownContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.backgroundVariant};
  display: grid;
  align-items: center;
  top: 0;
  left: ${({ isopen }) => (isopen ? 0 : "100%")};
  opacity: ${({ isopen }) => (isopen ? 1 : 0)};
  transition: 0.5s ease-in-out;
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
const CloseIcon = styled(FaTimes)`
  color: ${({ theme }) => theme.headingColor};
  &:hover {
    color: ${({ theme }) => theme.primaryColor};
  }
`;
const DropdownWrapper = styled.div``;
const DropdownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-bottom: 4rem;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 60px);
  }
`;
const Dropdownlink = styled(Link)`
  display: flex;
  color: ${({ theme }) => theme.headingColor};
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  cursor: pointer;
  transition: 0.6s ease-in-out;
  position: relative;
  left: ${({ isOpen }) => (isOpen ? 0 : "100%")};

  &:hover {
    color: ${({ theme }) => theme.primaryColor};
  }
`;
const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const Dropdown = ({ toggle, isOpen }) => {
  return (
    <DropsownContainer isopen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <DropdownWrapper>
        <DropdownMenu>
          {menuData.map((menu, i) => (
            <Dropdownlink to={menu.link} key={i} isOpen={isOpen}>
              {menu.title}
            </Dropdownlink>
          ))}
        </DropdownMenu>
        <BtnWrap>
          <Button primary round="true" big="true" to="/contact">
            Contact Us
          </Button>
        </BtnWrap>
      </DropdownWrapper>
    </DropsownContainer>
  );
};

export default Dropdown;
