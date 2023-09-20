import styled from "styled-components";
import bigBulb from "../assets/bigBulb.png"

const Introduction = () => {
    return (
        <Section>
            <div className="container">
                <Image>
                    <img src={bigBulb} alt="bigBulb" />
                </Image>
                <Text>
                    <h1>Introduction to getlinked</h1>
                    <h1>tech Hackathon 1.0</h1>
                    <p>Our tech hackathon is a melting pot of visionaries, and its purpose is as
clear as day: to shape the future. Whether you're a coding genius, a 
design maverick, or a concept wizard, you'll have the chance to transform 
your ideas into reality. Solving real-world problems, pushing the boundaries
of technology, and creating solutions that can change the world,
that's what we're all about!</p>
                </Text>
            </div>
        </Section>
    );
};

const Section = styled.section`
  width: 100%;
  min-height: 80vh;
  border-bottom: 0.1px solid rgba(225, 225, 225, 0.18);
  .container {
    padding: 4rem 0;
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
    img {
        width: 30rem;
    }
`

const Text = styled.article`
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

export default Introduction;