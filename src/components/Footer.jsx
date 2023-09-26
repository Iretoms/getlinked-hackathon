import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter, FaLocationDot } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="container">
        <About>
          <div className="logo">
            <NavLink to="/">
              <span>get</span>
              <span>linked</span>
            </NavLink>
          </div>
          <p>
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology.
          </p>
          <div className="terms">
            <span>Terms of Use</span>
            <span>|</span>
            <span>Privacy Policy</span>
          </div>
        </About>
        <Links>
          <h1>Useful Links</h1>
          <ul>
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
              <NavLink to="/register">Register</NavLink>
            </li>
            <li>
              <span>Follow us</span>
              <span>
                <FaInstagram />
              </span>
              <span>
                <FaXTwitter />
              </span>
              <span>
                <FaFacebookF />
              </span>
              <span>
                <FaLinkedinIn />
              </span>
            </li>
          </ul>
        </Links>
        <Contact>
          <h1>Contact Us</h1>
          <p>
            <span>
              <BiSolidPhoneCall />
            </span>
            <span>+234 679 81819</span>
          </p>
          <p>
            <span>
              <FaLocationDot />
            </span>
            <span>27,Alara Street Yaba 100012 Lagos State</span>
          </p>
        </Contact>
      </div>
      <p className="copyright">All rights reserved. &copy; getlinked Ltd.</p>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  width: 100%;
  min-height: 50vh;
  background-color: #100b20;
  padding: 5rem 0;
  .container {
    width: 88%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .copyright {
    font-size: 0.8rem;
    text-align: center;
    margin-top: 2rem;
  }
`;

const About = styled.article`
  width: 45%;
  .logo {
    span {
      font-size: 2rem;
      color: #fff;
      font-family: "Clash Display", sans-serif;
      &:nth-child(2) {
        color: #d434fe;
      }
    }
  }

  p {
    font-size: 0.8rem;
    line-height: 23px;
    margin-bottom: 4rem;
  }

  .terms {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    span {
      color: #d434fe;
      &:nth-child(odd) {
        font-size: 0.8rem;
        color: #fff;
      }
    }
  }
`;

const Links = styled.article`
  width: 30%;
  h1 {
    color: #d434fe;
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  li {
    margin-bottom: 1rem;
    a {
      font-size: 0.8rem;
    }
    &:nth-child(5) {
      display: flex;
      gap: 1rem;
      align-items: center;
      span {
        svg {
          font-size: 1.2rem;
        }
        &:nth-child(1) {
          color: #d434fe;
          font-size: 0.8rem;
        }
      }
    }
  }
`;

const Contact = styled.article`
  width: 15%;
  h1 {
    color: #d434fe;
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 1rem;
    display: flex;
    gap: 1rem;
    span {
      &:nth-child(1) {
        font-size: 1.2rem;
      }
      &:nth-child(2) {
        font-size: 0.8rem;
      }
    }
  }
`;

export default Footer;
