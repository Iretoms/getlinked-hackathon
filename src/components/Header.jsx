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
      </Nav>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  height: 14vh;
  border-bottom: 0.1px solid rgba(225, 225, 225, 0.18);
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
`;

export default Header;
