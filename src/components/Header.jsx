import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Button from "./Button";

const Header = () => {
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
        <MenuBar>
          <span></span>
          <span></span>
          <span></span>
        </MenuBar>
      </Nav>
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

  @media screen and (max-width: 40rem) {
    display: flex;
  }
`;

export default Header;
