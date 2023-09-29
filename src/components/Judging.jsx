import styled from "styled-components";
import manWoman from "../assets/manWoman.png";
import purpleFlare from "../assets/purpleFlare.png";
import Button from "./Button";

const Judging = () => {
  return (
    <Section>
      <div className="container">
        <Image>
          <div></div>
          <img src={manWoman} alt="manWoman" className="manWoman" />
          <img src={purpleFlare} alt="purpleFlare" className="purpleFlare" />
        </Image>
        <Text>
          <h1>Judging Criteria</h1>
          <h1>Key attributes</h1>
          <p>
            <span>Innovation and Creativity:</span> Evaluate the uniqueness and
            creativity of the solution. Consider whether it addresses a
            real-world problem in a novel way or introduces innovative features.
          </p>
          <p>
            <span>Functionality:</span> Assess how well the solution works. Does
            it perform its intended functions effectively and without major
            issues? Judges would consider the completeness and robustness of the
            solution.
          </p>
          <p>
            <span>Impact and Relevance:</span>Impact and Relevance: Determine
            the potential impact of the solution in the real world. Does it
            address a significant problem, and is it relevant to the target
            audience? Judges would assess the potential social, economic, or
            environmental benefits.
          </p>
          <p>
            <span>Technical Complexity:</span> Evaluate the technical
            sophistication of the solution. Judges would consider the complexity
            of the code, the use of advanced technologies or algorithms, and the
            scalability of the solution.
          </p>
          <p>
            <span>Adherence to Hackathon Rules:</span> Judges will Ensure that
            the team adhered to the rules and guidelines of the hackathon,
            including deadlines, use of specific technologies or APIs, and any
            other competition-specific requirements.
          </p>
          <div className="buttonContainer">
            <a href="#read">
              <Button name="Read More" />
            </a>
          </div>
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
    padding: 3rem 0 4rem;
    width: 88%;
    margin: 0 auto;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 3rem;
    article {
      width: 50%;
    }
  }
`;

const Image = styled.article`
  position: relative;
  .manWoman {
    width: 33rem;
    height: 33rem;
  }
  .purpleFlare {
    z-index: -1;
    position: absolute;
    width: 27rem;
    height: 27rem;
    top: 6rem;
    right: 7rem;
  }
  div {
    z-index: -1;
    position: absolute;
    top: -1rem;
    left: 4rem;
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
    background-image: linear-gradient(to right, #d434fe 30%, #903aff);
  }
`;

const Text = styled.article`
  h1 {
    font-family: "Clash Display", sans-serif;
    font-size: 1.8rem;
    &:nth-child(2) {
      color: #d434fe;
    }
  }
  p {
    margin-top: 0.5rem;
    font-size: 0.8rem;
    line-height: 27.5px;
    span {
      color: #ff26b9;
    }
  }

  .buttonContainer {
    margin-top: 2rem;
    width: max-content;
  }
`;

export default Judging;
