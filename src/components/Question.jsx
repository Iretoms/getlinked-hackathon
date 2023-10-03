import styled from "styled-components";
import manSitting from "../assets/manSitting.png";

const Question = () => {
  return (
    <Section>
      <div className="container" id="faqs">
        <Text>
          <h1>Frequently Ask</h1>
          <h1>Question</h1>
          <p className="weGot">
            We got answers to the questions that you might want to ask about{" "}
            <span className="getlinked">getlinked Hackathon 1.0</span>
          </p>
          <div className="questions">
            <div className="question">
              <p>
                <span>
                  Can I work on a project I started before the hackathon?
                </span>
                <span>+</span>
              </p>
            </div>
            <div className="question">
              <p>
                <span>What happens if I need help during the hackathon?</span>
                <span>+</span>
              </p>
            </div>
            <div className="question">
              <p>
                <span>What happens if I don't have an idea for a project?</span>
                <span>+</span>
              </p>
            </div>
            <div className="question">
              <p>
                <span>Can I join a team or do I have to come with one?</span>
                <span>+</span>
              </p>
            </div>
            <div className="question">
              <p>
                <span>What happens after the hackathon ends?</span>
                <span>+</span>
              </p>
            </div>
            <div className="question">
              <p>
                <span>
                  Can I work on a project I started before the hackathon?
                </span>
                <span>+</span>
              </p>
            </div>
          </div>
        </Text>
        <Image>
          <h1>?</h1>
          <h1>?</h1>
          <h1>?</h1>
          <img src={manSitting} alt="manSitting" />
        </Image>
      </div>
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  min-height: 80vh;
  border-bottom: 0.1px solid rgba(225, 225, 225, 0.18);
  .container {
    padding: 6rem 0 4rem;
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

  @media screen and (max-width: 40rem) {
    .container {
      padding: 4rem 0;
      flex-direction: column;
      gap: 6rem;
      article {
        width: 100%;
      }
    }
  }
`;

const Image = styled.article`
  position: relative;
  h1 {
    color: #a866fd;
    font-family: "Made Tommy";
    position: absolute;
    font-size: 5rem;
    &:nth-child(1) {
      font-size: 7rem;
      color: #d434fe;
      left: 9rem;
      top: -6rem;
    }
    &:nth-child(2) {
      top: -3rem;
    }
    &:nth-child(3) {
      top: -3rem;
      right: 14rem;
    }
  }
  img {
    width: 31rem;
    height: 31rem;
  }

  @media screen and (max-width: 40rem) {
    h1 {
      font-size:2.5rem;
      &:nth-child(1){
        font-size: 4rem;
        left: 7rem;
        top: -2.5rem;
      }
      &:nth-child(2){
        top: 0;
        left: 3rem;
      }
      &:nth-child(3){
        top: 0;
        right: 10rem;
      }
    }
   img {
    width: 100%;
    height: 25rem;
   }
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
    &.weGot {
      width: 75%;
    }
    .getlinked {
      font-weight: bold;
    }
  }

  .questions {
    width: 85%;
    margin-top: 3rem;
    .question {
      padding-bottom: 0.5rem;
      border-bottom: 1px solid #d434fe;
      p {
        display: flex;
        justify-content: space-between;
        span {
          &:nth-child(2) {
            color: #d434fe;
          }
        }
      }
    }
  }

  @media screen and (max-width: 40rem) {
    h1 {
      text-align: center;
      font-size: 1.5rem;
    }
   p {
    &.weGot{
      text-align: center;
      width: 100%;
    }
   }
   .questions {
    width: 100%;
    .question {
      p {
        gap: 3rem;
        line-height: 20px;
        span {
          &:nth-child(2){
            font-size: 1.2rem;
          }
        }
      }
    }
   }
  }
`;

export default Question;
