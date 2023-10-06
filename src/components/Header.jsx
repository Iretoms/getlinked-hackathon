import { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const menuHandler = () => {
    setMenu(!menu);
  };
  const closeMenu = () => {
    setMenu(false);
  };
  return (
    <StyledHeader>
      <Nav>
        <div className="logo">
          <NavLink to="/">
            <span>get</span>
            <span>linked</span>
          </NavLink>
        </div>
        <NavList>
          <li>
            <a href="#timeline">Timeline</a>
          </li>
          <li>
            <a href="#overview">Overview</a>
          </li>
          <li>
            <a href="#faqs">FAQs</a>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/register">
              <Button name="Register" />
            </NavLink>
          </li>
        </NavList>
        <MenuBar className={menu && "active"} onClick={menuHandler}>
          <span></span>
          <span></span>
          <span></span>
        </MenuBar>
      </Nav>
      <MobileNav className={!menu && "active"}>
        <ul>
          <li onClick={closeMenu}>
            <a href="#timeline">Timeline</a>
          </li>
          <li onClick={closeMenu}>
            <a href="#overview">Overview</a>
          </li>
          <li onClick={closeMenu}>
            <a href="#faqs">FAQs</a>
          </li>
          <li onClick={closeMenu}>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li onClick={closeMenu}>
            <NavLink to="/register">
              <Button name="Register" />
            </NavLink>
          </li>
        </ul>
      </MobileNav>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  height: 14vh;
  border-bottom: 0.1px solid rgba(225, 225, 225, 0.18);
  @media screen and (max-width: 40rem) {
    min-height: 10vh;
  }
`;

const Nav = styled.nav`
  padding-top: 2.5rem;
  width: 88%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    span {
      font-size: 2.2rem;
      color: #fff;
      font-family: "Clash Display", sans-serif;
      &:nth-child(2) {
        color: #d434fe;
      }
    }
  }

  @media screen and (max-width: 40rem) {
    .logo {
      span {
        font-size: 1.6rem;
      }
    }
  }
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  li {
    a {
      font-size: 0.9rem;
    }
    &:nth-child(5) {
      margin-left: 3.5rem;
    }
  }

  @media screen and (max-width: 40rem) {
    display: none;
  }
`;

const MenuBar = styled.div`
  z-index: 20;
  display: none;
  flex-direction: column;
  width: 1.5rem;
  height: 1rem;
  justify-content: space-between;
  span {
    border-radius: 9999px;
    width: 100%;
    height: 3px;
    background-color: #fff;
    &:nth-child(1) {
      width: 50%;
    }
    &:nth-child(3) {
      margin-left: 50%;
      width: 50%;
    }
  }

  &.active {
    transform: rotate(45deg);
    span {
      &:nth-child(1) {
        transform-origin: right;
        transform: translateY(6px) rotate(90deg);
      }
      &:nth-child(3) {
        transform-origin: left;
        transform: translateY(-6px) rotate(90deg);
      }
    }
  }

  @media screen and (max-width: 40rem) {
    display: flex;
  }
`;

const MobileNav = styled.div`
  z-index: 10;
  background-color: #150e28;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60vh;
  display: flex;
  align-items: center;
  padding-left: 3rem;
  transform: translateX(0);
  transition: transform 0.3s ease;
  ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  &.active {
    transform: translateX(100%);
  }
  @media screen and (min-width: 40rem) {
    display: none;
  }
`;

export default Header;
