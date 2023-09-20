import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "./Button";
import maskedMan from "../assets/maskedMan.png";
import purpleFlare from "../assets/purpleFlare.png";
import shinyGlobe from "../assets/shinyGlobe.png";
import curvedLine from "../assets/curvedLine.png";
import chain from "../assets/chain.png";
import bulb from "../assets/bulb.png";
import spark from "../assets/spark.png";

const Hero = () => {
  return (
    <Section>
      <Container>
        <div className="ignite">
          <h1>Igniting a Revolution in HR Innovation</h1>
          <img src={curvedLine} alt="line" />
        </div>
        <Text>
          <img src={chain} alt="chain" className="chain" />
          <img src={bulb} alt="bulb" className="bulb" />
          <img src={spark} alt="spark" className="spark" />
          <h1>getlinked Tech</h1>
          <h1>
            Hackathon <span>1.0</span>
          </h1>
          <p>
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big price
          </p>
          <div className="buttonContainer">
            <Link to="/register">
              <Button name="Register" />
            </Link>
          </div>
          <div className="timer">
            <p>
              00<span>H</span>
            </p>
            <p>
              00<span>M</span>
            </p>
            <p>
              00<span>S</span>
            </p>
          </div>
        </Text>
        <Image>
          <img src={maskedMan} alt="man" className="mask_man" />
          <img src={shinyGlobe} alt="globe" className="shiny_globe" />
          <img src={purpleFlare} alt="flare" className="purple_flare" />
        </Image>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  overflow: hidden;
  width: 100%;
  min-height: 86vh;
  border-bottom: 0.1px solid rgba(225, 225, 225, 0.18);
`;

const Container = styled.div`
  position: relative;
  width: 88%;
  margin: 0 auto;
  display: flex;
  padding-top: 6rem;
  article {
    width: 50%;
  }
  .ignite {
    position: absolute;
    right: 0;
    top: 1rem;
    h1 {
      font-weight: bold;
      font-style: italic;
    }
    img {
      width: 13rem;
      position: absolute;
      right: -1rem;
    }
  }
`;

const Text = styled.article`
  position: relative;
  h1 {
    font-family: "Clash Display", sans-serif;
    font-size: 4rem;
    span {
      color: #d434fe;
    }
  }

  p {
    margin-top: 2rem;
    width: 80%;
  }

  .buttonContainer {
    margin-top: 1.5rem;
    width: max-content;
  }

  .timer {
    margin-top: 2rem;
    width: max-content;
    display: flex;
    gap: 1.5rem;
    p {
      font-family: "Unica One", cursive;
      font-size: 2.2rem;
      span {
        font-family: "Montserrat", sans-serif;
        font-size: 0.5rem;
      }
    }
  }

  img {
    position: absolute;
    width: 3.5rem;
  }
  .chain {
    right: 1.3rem;
    top: 6rem;
  }
  .spark {
    top: 7rem;
    right: -1rem;
  }
  .bulb {
    right: 0;
    top: 1rem;
  }
`;

const Image = styled.article`
  position: relative;
  img {
    position: absolute;
  }
  .mask_man {
    left: -1rem;
    top: -1rem;
    width: 38rem;
    height: 32rem;
    z-index: -1;
  }
  .shiny_globe {
    left: 3rem;
    width: 31rem;
    z-index: 2;
  }
  .purple_flare {
    width: 30rem;
    left: 12rem;
    top: -4rem;
    z-index: 1;
  }
`;

export default Hero;
