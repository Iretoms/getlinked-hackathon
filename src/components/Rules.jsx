import styled from "styled-components";
import ladySitting from "../assets/ladySitting.png";
import purpleFlare from "../assets/purpleFlare.png";

const Rules = () => {
  return (
    <Section>
      <div className="container">
        <Text>
          <img src={purpleFlare} alt="purpleFlare" />
          <h1>Rules and</h1>
          <h1>Guidelines</h1>
          <p>
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </Text>
        <Image>
          <div></div>
          <img src={ladySitting} alt="ladySitting" />
        </Image>
      </div>
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  min-height: 75vh;
  border-bottom: 0.1px solid rgba(225, 225, 225, 0.18);
  .container {
    width: 88%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    article {
      width: 50%;
    }
  }
`;

const Image = styled.article`
  position: relative;
  img {
    width: 33rem;
    height: 35rem;
  }
  div {
    z-index: -1;
    position: absolute;
    right: 9rem;
    top: 5.5rem;
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
    background-image: linear-gradient(to right, #d434fe 30%, #903aff);
  }
`;

const Text = styled.article`
  position: relative;
  img {
    width: 27rem;
    height: 27rem;
    z-index: -1;
    position: absolute;
    top: -5rem;
  }
  h1 {
    font-family: "Clash Display", sans-serif;
    font-size: 1.8rem;
    &:nth-child(2) {
      color: #d434fe;
    }
  }
  p {
    margin-top: 1rem;
    font-size: 0.8rem;
    line-height: 27.5px;
  }
`;

export default Rules;
