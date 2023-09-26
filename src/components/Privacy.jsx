import styled from "styled-components";
import Button from "./Button";
import { FaCheck } from "react-icons/fa";
import manLock from "../assets/manLock.png";
import lock from "../assets/lock.png";

const Privacy = () => {
  return (
    <Section>
      <div className="container">
        <Text>
          <h1 className="title">Privacy Policy and</h1>
          <h1 className="title">Terms</h1>
          <p className="subtitle">Last updated on September 12, 2023</p>
          <p className="subtitle">
            Below are our privacy & policy, which outline a lot of goodies. it’s
            our aim to always take of our participant
          </p>

          <div className="policy">
            <p>
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>
            <h1>Lincensing Policy</h1>
            <h1>Here are terms of our Standard License:</h1>
            <div className="terms">
              <span>
                <FaCheck />
              </span>
              <span>
                The Standard License grants you a non-exclusive right to
                navigate and register for our event
              </span>
            </div>
            <div className="terms">
              <span>
                <FaCheck />
              </span>
              <span>
                You are licensed to use the item available at any free source
                sites, for your project developement
              </span>
            </div>
            <div className="buttonContainer">
              <Button name="Read More" />
            </div>
          </div>
        </Text>
        <Image>
          <img src={manLock} alt="manLock" />
          <img src={lock} alt="lock" />
        </Image>
      </div>
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  .container {
    padding: 5rem 0;
    width: 88%;
    margin: 0 auto;
    display: flex;
    gap: 2rem;
    align-items: flex-end;
    article {
      width: 50%;
    }
  }
`;

const Text = styled.article`
  .title {
    font-family: "Clash Display", sans-serif;
    font-size: 1.8rem;
    &:nth-child(2) {
      color: #d434fe;
    }
  }
  .subtitle {
    width: 78%;
    margin-top: 0.5rem;
    font-size: 0.8rem;
    line-height: 20px;
  }

  .policy {
    background-color: rgba(212, 52, 254, 0.04);
    margin-top: 2rem;
    padding: 2rem 3rem;
    border: 1px solid #d434fe;
    border-radius: 5px;
    p {
      font-size: 0.8rem;
      line-height: 25px;
      margin-bottom: 1.7rem;
    }
    h1 {
      color: #fff;
      font-size: 0.9rem;
      margin-bottom: 1rem;
      &:nth-child(2) {
        color: #d434fe;
      }
    }
    .terms {
      display: flex;
      gap: 1rem;
      align-items: flex-start;
      margin-bottom: 1rem;
      span {
        &:nth-child(1) {
          border-radius: 50%;
          background-color: #2de100;
          color: #fff;
          padding: 0.2rem;
          width: 1rem;
          height: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          svg {
            font-size: 0.5rem;
          }
        }
        &:nth-child(2) {
          line-height: 20px;
          font-size: 0.8rem;
        }
      }
    }
    .buttonContainer {
      margin: 2rem auto 0;
      width: max-content;
    }
  }
`;

const Image = styled.article`
  position: relative;
  img {
    width: 30rem;
    height: 40rem;
    &:nth-child(2) {
      position: absolute;
      z-index: -1;
      top: -5rem;
      left: 4rem;
      width: 28rem;
      height: 30rem;
    }
  }
`;

export default Privacy;
